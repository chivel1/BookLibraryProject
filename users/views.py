from django.shortcuts import render
from . import forms

def register(request):
    form = forms.CustomUserRegistrationForm()
    context = {
        "forms" : form
    }
    return render(request, 'register.html', context)

def login(request):
    form = forms.CustomUserLoginForm()
    context = {
        "forms" : form
    }
    return render(request, 'login.html', context)

def addtocart(request):
    return render(request, 'addtocart.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def contact(request):
    return render(request, 'contact.html') 

def bookdetailspage(request):
    return render(request, 'bookdetailspage.html') 

def forgottenpassword(request):
    return render(request, 'forgottenpassword.html')
