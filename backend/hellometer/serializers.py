from rest_framework import serializers
from .models import DriveThruOrder

class DriveThruOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = DriveThruOrder
        fields = ('id', 'store_id', 'arrival_time', 'order_time', 'pickup_time', 'total_time')