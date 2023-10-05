from django.shortcuts import render
from rest_framework.views import APIView
from django.http import  HttpResponse, JsonResponse
from rest_framework.response import Response
from utils.chatbot import Ask_ChatGPT
from utils.chatbot import Judge_debate

import random
import json



# Create your views here.
# お題の自動生成
class RandomThemeAPI(APIView):
  permission_classes = ()
  authentication_classes = ()
  def get(self,request):
    randomTitle=["きのこの山よりたけのこの里のほうがおいしい", "卵より鶏のほうが先である", "金より愛を優先すべきである", 
                 "男女の友情は成り立つ", "学校に制服は必要である", "子供より大人のほうが幸せである", "結婚したほうが幸せである",
                 "頭脳より運動神経のほうが必要である", "ディベートにおいてAIのほうが実力が上である", "やられたらやり返すべきである"]
    title=randomTitle[int(random.uniform(0,9))]
    
    return Response(title)

class DebateAPI(APIView):
  permission_classes = ()
  authentication_classes = ()
  def post(self,request):
    postedJsonBody=json.loads(request.body)
    title=postedJsonBody["title"]
    roleflag=postedJsonBody["flag"]
    if(roleflag=="true"): role="否定派"
    else: role="賛成派"
    jsonmessage=postedJsonBody["message"]
    aiResponse=Ask_ChatGPT(jsonmessage,title,role)
    jsonmessage.append({"role":"assistant", "content":aiResponse})
    response={
      "message": jsonmessage,
      "title": title,
      "flag": roleflag
    }

    return JsonResponse(response)

# ディベート結果の勝者判定とコメント
class JudgeAPI(APIView):
  permission_classes = ()
  authentication_classes = ()
  def post(self,request):
    postedJsonBody=json.loads(request.body)
    messages=postedJsonBody["message"]
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
