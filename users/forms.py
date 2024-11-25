from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from . import models

class CustomUserRegistrationForm(UserCreationForm):
    is_author = forms.BooleanField(required=False, label="are you an author?")
    class Meta:
        model = models.CustomUser
        fields = ("email", "is_author", "password1","password2", "username", "first_name", "last_name")


    
class CustomUserLoginForm(AuthenticationForm):
    username = forms.EmailField()