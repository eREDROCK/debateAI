from django.contrib import admin
from django.urls import path, include
from .views import Test

urlpatterns = [
    path('api', Test.as_view()),
]