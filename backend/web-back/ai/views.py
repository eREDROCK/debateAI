from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from django.views.generic import View, UpdateView, FormView
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
import urllib.request
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.utils.decorators import method_decorator
from utils import chatbot

# Create your views here.

class Test(APIView):
    # permission_classes = ()
    # authentication_classes = ()

    def post(self, request, *args, **kwargs):
        print(request.data["message"])
        print(request.data["sys_message"])
        print(request.data["flag"])
        message = request.data["message"]
        print(type(message))
        
        return HttpResponse(chatbot.Ask_ChatGPT(message=message))