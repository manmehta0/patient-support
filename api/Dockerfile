# Use the official Python slim image to minimize the size
FROM python:3.9-slim

# Arguments passed during build time
ARG CLIENT_API_KEY
ARG OPEN_API_KEY
ARG VITE_GOOGLE_MAPS_API_KEY

# Set environment variables based on the build arguments
ENV CLIENT_API_KEY=$CLIENT_API_KEY \
  OPEN_API_KEY=$OPEN_API_KEY \
  VITE_GOOGLE_MAPS_API_KEY=$VITE_GOOGLE_MAPS_API_KEY

# Set the working directory inside the container
WORKDIR /app

# Install any system dependencies before installing Python packages
RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential \
  && rm -rf /var/lib/apt/lists/*

# Copy only requirements file first for efficient layer caching
COPY requirements.txt .

# Install Python dependencies without cache to reduce image size
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the Flask app's default port
EXPOSE 5000

# Define the default command to run the Flask app
CMD ["python", "app.py"]
