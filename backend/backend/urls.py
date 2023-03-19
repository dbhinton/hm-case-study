"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from hellometer import views
from hellometer.views import DriveThruOrderView

router = routers.DefaultRouter()
router.register(r'drivethruorders', views.DriveThruOrderView, 'drivethruorders')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('average-order-time/', DriveThruOrderView.as_view({'get': 'average_order_time'}), name='average-order-time'),
    path('average-pickup-time/', DriveThruOrderView.as_view({'get': 'average_pickup_time'}), name='average-pickup-time'),
    path('average-total-time/', DriveThruOrderView.as_view({'get': 'average_total_time'}), name='average-total-time'),
    path('order-count-by-hour/', DriveThruOrderView.as_view({'get': 'order_count_by_hour'}), name='order-count-by-hour'),
    path('drivethru-scatterplot/', DriveThruOrderView.as_view({'get': 'generate_drive_thru_scatterplot'}), name='drivethru-scatterplot')


]