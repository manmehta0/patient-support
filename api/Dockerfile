# Use the official Python image from the Docker Hub
FROM python:3.9-slim

ARG CLIENT_API_KEY=${CLIENT_API_KEY}
ARG OPEN_API_KEY=${OPEN_API_KEY}
ARG GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}

ENV CLIENT_API_KEY=${CLIENT_API_KEY}
ENV OPEN_API_KEY=${OPEN_API_KEY}
ENV GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}
# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Flask app
COPY app.py .
COPY package package

# Expose the port on which the Flask app runs
EXPOSE 5000

# Command to run the Flask app
CMD ["python", "app.py"]