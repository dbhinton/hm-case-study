from django.db.models import Avg
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import JsonResponse
from django.db.models.functions import TruncHour
from django.db.models import Count
from datetime import datetime, time
from rest_framework import viewsets
from .serializers import DriveThruOrderSerializer
from .models import DriveThruOrder


class DriveThruOrderView(viewsets.ModelViewSet):
    serializer_class = DriveThruOrderSerializer
    queryset = DriveThruOrder.objects.all()

    @action(detail=False, methods=['get'])

    def generate_drive_thru_scatterplot(self, request):
        orders = DriveThruOrder.objects.all().order_by('arrival_time')

        data = {
            'x': [o.arrival_time for o in orders],
            'y': [o.total_time for o in orders],
            'mode': 'markers',
            'marker': {'color': 'blue', 'size': 10},
            'type': 'scatter'
        }

        return Response(data)

    def average_order_time(self, request):
        # perform the aggregation
        average_order_time = self.queryset.aggregate(avg_order_time=Avg('order_time'))

        # return the average  order time as a response
        return Response(average_order_time)

    def average_pickup_time(self, request):
        # perform the aggregation
        average_pickup_time = self.queryset.aggregate(avg_pickup_time=Avg('pickup_time'))

        # return the average pickup time as a response
        return Response(average_pickup_time)

    def average_total_time(self, request):
        # perform the aggregation
        average_total_time = self.queryset.aggregate(avg_total_time=Avg('total_time'))

        # return the average time as a response
        return Response(average_total_time)

    def order_count_by_hour(self, request):
        # group orders by hour of arrival_time and return the count
        orders_by_hour = DriveThruOrder.objects.annotate(hour=TruncHour('arrival_time')).values('hour').annotate(count=Count('id'))
        
        # create a list of objects with hour and count properties
        data = [{'hour': order['hour'].strftime('%I %p'), 'count': order['count']} for order in orders_by_hour]

        # sort the list by hour
        data.sort(key=lambda x: datetime.strptime(x['hour'], '%I %p').time())
        
        # return the data as a JSON response
        return Response(data)
