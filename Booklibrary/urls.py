from django.urls import path,include
from . import views
app_name = "booklib"
urlpatterns = [
    path('', views.dashboard, name="home"),

]