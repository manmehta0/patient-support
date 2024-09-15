# api/Dockerfile

# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Flask app
COPY app.py .

# Expose the port on which the Flask app runs
EXPOSE 5000

# Command to run the Flask app
CMD ["python", "app.py"]