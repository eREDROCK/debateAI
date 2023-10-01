from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from django.views.generic import View, UpdateView, FormView
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
import urllib.request
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.utils.decorators import method_decorator

# Create your views here.

class Test(APIView):
    # permission_classes = ()
    # authentication_classes = ()

    def post(self, request, *args, **kwargs):
        return HttpResponse("ok")