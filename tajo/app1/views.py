from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Django Home!")

def about(request):
    return HttpResponse("This is the About page.")
