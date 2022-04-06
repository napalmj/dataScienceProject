from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('gdp/', views.getData, name="data"),
    path('gdp/<str:pk>/', views.getDataSingle, name="data")
]