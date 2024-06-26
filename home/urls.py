from django.urls import path
from . import views

app_name = 'home'
urlpatterns = [
    path('', views.coming_soon, name='coming_soon'),
    path('<str:invalid_url>/', views.handle_404, name='handle_404'),
]