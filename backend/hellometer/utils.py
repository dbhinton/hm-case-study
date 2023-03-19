import csv
from django.core.exceptions import ValidationError
from .models import DriveThruOrder

FIELD_MAPPER = {
    'store_id': 'Store',
    'arrival_time': 'Arrival Time',
    'order_time': 'Order Time',
    'pickup_time': 'Pickup Time',
    'total_time': 'Total Time',
}

def load_csv(file_path):
    with open(file_path, newline='') as csv_file:
        reader = csv.DictReader(csv_file)
        for row in reader:
            data = {field: row[value] for field, value in FIELD_MAPPER.items()}

            try:
                # check if the row already exists
                if DriveThruOrder.objects.filter(**data).exists():
                    print(f"Row already exists: {data}")
                    continue

                # save data to database
                obj = DriveThruOrder.objects.create(**data)
                obj.save()
                print(f"Row added: {data}")

            except Exception as e:
                print(f"Error: {e}")
