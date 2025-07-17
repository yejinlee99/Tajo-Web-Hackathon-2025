from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render

def where_to(request):
    return render(request, 'call/where_to.html')
