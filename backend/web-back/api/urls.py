from django.urls import path, include
from .views import StartStatementAPI


urlpatterns = [
    path('start/', StartStatementAPI.as_view()),
]
