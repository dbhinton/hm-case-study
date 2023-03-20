# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file into the container
COPY ./backend/requirements.txt /app/backend/requirements.txt

# Install any dependencies
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy the backend code into the container
COPY ./backend /app/backend

# Run any necessary Django migrations
RUN python backend/manage.py makemigrations
RUN python backend/manage.py migrate

# Expose port 8000 for the Django app
EXPOSE 8000

# Start the Django app
CMD ["python", "./backend/manage.py", "runserver", "0.0.0.0:8000"]
