from django.shortcuts import render
from rest_framework.views import APIView
from django.http import  HttpResponse
from rest_framework.response import Response
from utils.chatbot import Ask_ChatGPT

import random
import json



# Create your views here.
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
    if(roleflag=="true"): role="反対派"
    else: role="賛成派"
    jsonmessage=postedJsonBody["message"]
    aiResponse=Ask_ChatGPT(jsonmessage,title,role)
    jsonmessage.append({"role":"assistant", "content":aiResponse})
    response={
      "message": jsonmessage,
      "title": title,
      "flag": roleflag
    }
    jsonresponse=json.dumps(response, ensure_ascii=False)
    return Response(jsonresponse)
