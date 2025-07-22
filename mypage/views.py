from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render

def mypage_home(request):
    return render(request, 'mypage/mypage_home.html')

def update_mypage(request):
    return render(request, 'mypage/update_mypage.html')

def card(request):
    return render(request, 'mypage/card.html')

def bookmark(request):
    return render(request, 'mypage/bookmark.html')

def history(request):
    return render(request, 'mypage/history.html')

def notice(request):
    return render(request, 'mypage/notice.html')

def qna(request):
    return render(request, 'mypage/qna.html')


