from django.db import models

class DriveThruOrder(models.Model):
    store_id = models.IntegerField()
    arrival_time = models.TimeField()
    order_time = models.IntegerField()
    pickup_time = models.IntegerField()
    total_time = models.IntegerField()