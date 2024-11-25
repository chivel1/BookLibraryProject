from django.urls import path
from . import views

app_name = "user"
urlpatterns = [
    path('register/', views.register, name="register"),
    path('login/', views.login, name="login"),
    path('addtocart/', views.addtocart, name="addtocart"),
    path('dashboard/', views.dashboard, name="dashboard"),
    path('contact/', views.contact, name="contact"),  
    path('forgottenpassword/', views.forgottenpassword, name="forgottenpassword"),  
    path('bookdetailspage/', views.bookdetailspage, name="bookdetailspage"),  
    ]
