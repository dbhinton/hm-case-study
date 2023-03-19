from django.core.management.base import BaseCommand
from hellometer.utils import load_csv

class Command(BaseCommand):
    help = 'Load data from a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('file_path', type=str, help='Path to CSV file')

    def handle(self, *args, **options):
        file_path = options['file_path']
        load_csv(file_path)
        self.stdout.write(self.style.SUCCESS('CSV file loaded successfully'))
