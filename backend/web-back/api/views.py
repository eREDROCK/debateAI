from django.shortcuts import render
from rest_framework.views import APIView
from django.http import  HttpResponse, JsonResponse
from rest_framework.response import Response
from utils.chatbot import Ask_ChatGPT
from utils.chatbot import Judge_debate
from utils.chatbot import DefaetedJudge

import random
import json
import re
from distutils.util import strtobool



# Create your views here.
# お題の自動生成
class RandomThemeAPI(APIView):
  permission_classes = ()
  authentication_classes = ()

  def get(self,request):
    randomTitle=["きのこの山よりたけのこの里のほうがおいしい", "卵より鶏のほうが先である", "金より愛を優先すべきである", 
                 "男女の友情は成り立つ", "学校に制服は必要である", "子供より大人のほうが幸せである", "結婚したほうが幸せである",
                 "頭脳より運動神経のほうが必要である", "ディベートにおいてAIのほうが実力が上である", "やられたらやり返すべきである"]
    title=randomTitle[int(random.uniform(0.0,9.9))] #randomTitleの中からランダムで１つ選ぶ
    
    return JsonResponse({"title":title})

class DebateAPI(APIView):
  permission_classes = ()
  authentication_classes = ()

  def post(self,request):
    # postedJsonBody=json.loads(request.body) #json形式のruquestをPythonで扱える形に変換
    title=request.data["title"]
    roleflag=request.data["flag"]

    if(roleflag=="true"): role="肯定派" #roleflagがTrueの時はassistantが否定派(roleはassistantの派閥を表す)
    else: role="否定派"

    jsonmessage=request.data["message"]
    try:
      result = DefaetedJudge(jsonmessage) # 直前の会話でuserがassistantを論破していれば[True]，そうでなければ[False]を出力
      result = bool(strtobool(result.split('判定結果:')[1].strip()))
    except:
      result = False   
      print("defeat error")
    print(result)

    aiResponse=Ask_ChatGPT(jsonmessage,title,role) #userの入力に対するassistantの返答を出力
    jsonmessage.append({"role":"assistant", "content":aiResponse}) #jsonの"message"キーの値にassiatantの返答を追加

    response={
      "message": jsonmessage,
      "title": title,
      "flag": roleflag,
      "defeatedstate": result
    }

    return JsonResponse(response)

# ディベート結果の勝者判定とコメント
class JudgeAPI(APIView):
  permission_classes = ()
  authentication_classes = ()
  
  def post(self,request):
    # postedJsonBody=json.loads(request.body)
    messages=request.data["message"]
    result=Judge_debate(messages)
    lines = result.split('\n')
    winner = None
    comment = None
    # 行ごとに処理
    for line in lines:
        # 行が「勝者:」で始まる場合、勝者を抽出
        if line.startswith('勝者:'):
            winner = line.split('勝者:')[1].strip()
        # 行が「コメント:」で始まる場合、コメントを抽出
        elif line.startswith('コメント:'):
            comment = line.split('コメント:')[1].strip()
    
    response={
       "winner": winner,
       "comment": comment
    }
    return JsonResponse(response)