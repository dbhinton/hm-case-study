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

    def average_wait_time_by_store_id(self, request):
            # group orders by store_id and return the average wait time for each store
        data = self.queryset.values('store_id').annotate(avg_wait_time=Avg('total_time') - Avg('order_time') - Avg('pickup_time'))

        # return the data as a JSON response
        return Response(data)

    def average_total_time_by_store_id(self, request):
            # group orders by store_id and return the average total_time for each store
            data = self.queryset.values('store_id').annotate(avg_total_time=Avg('total_time'))

            # return the data as a JSON response
            return Response(data)

    def generate_drive_thru_scatterplot(self, request):
        # Retrieve all DriveThruOrder objects and order them by arrival time
        orders = DriveThruOrder.objects.all().order_by('arrival_time')

        # Create a dictionary containing the x and y data for the scatter plot,
        # as well as the scatter plot settings
        data = {
            'x': [o.arrival_time for o in orders],  # x-axis data is arrival time for each order
            'y': [o.total_time for o in orders],    # y-axis data is total time for each order
            'mode': 'markers',                      # scatter plot mode is markers
            'marker': {'color': 'blue', 'size': 10},# markers are blue with size 10
            'type': 'scatter'                       # plot type is scatter
        }

        # Return the data as a Response object
        return Response(data)

    def generate_pickup_order_time_scatterplot(self, request):
        # Retrieve all DriveThruOrder objects
        orders = DriveThruOrder.objects.all()

        # Create a dictionary containing the x and y data for the scatter plot,
        # as well as the scatter plot settings
        data = {
            'x': [o.pickup_time for o in orders],  # x-axis data is pickup time for each order
            'y': [o.order_time for o in orders],   # y-axis data is order time for each order
            'mode': 'markers',                     # scatter plot mode is markers
            'marker': {'color': 'blue', 'size': 10},# markers are blue with size 10
            'type': 'scatter'                      # plot type is scatter
        }

        # Return the data as a Response object
        return Response(data)


    def order_count_by_hour(self, request):
        # group orders by hour of arrival_time and return the count
        orders_by_hour = DriveThruOrder.objects.annotate(hour=TruncHour('arrival_time')).values('hour').annotate(count=Count('id'))
        
        # create a list of objects with hour and count properties
        data = [{'hour': order['hour'].strftime('%I %p'), 'count': order['count']} for order in orders_by_hour]

        # sort the list by hour
        data.sort(key=lambda x: datetime.strptime(x['hour'], '%I %p').time())
        
        # return the data as a JSON response
        return Response(data)
