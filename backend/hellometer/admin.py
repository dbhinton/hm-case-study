from django.contrib import admin
from .models import DriveThruOrder

class DriveThruOrderAdmin(admin.ModelAdmin):
    list_display = ('store_id', 'arrival_time', 'order_time', 'pickup_time', 'total_time')

# Register your models here.

admin.site.register(DriveThruOrder, DriveThruOrderAdmin)