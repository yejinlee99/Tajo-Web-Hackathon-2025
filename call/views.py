from django.shortcuts import render
from django.urls import path
from . import views

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render

def where_to(request):
    return render(request, 'call/where_to.html')

def set_people(request):
    return render(request, 'call/set_people.html')

def waiting(request):
    return render(request, 'call/waiting.html')

def select_vehicle(request):
    return render(request, 'call/select_vehicle.html')

def assigned_vehicle(request):
    return render(request, 'call/assigned_vehicle.html')

def cancel_call(request):
    return render(request, 'call/cancel_call.html')




