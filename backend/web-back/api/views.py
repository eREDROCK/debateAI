from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response

# Create your views here.
class StartStatementAPI(APIView):
  permission_classes = ()
  authentication_classes = ()
  def post(self,request):
    print(request.data)
    return HttpResponse("ok")
  
  def get(self,request):
    return HttpResponse("ok")
  