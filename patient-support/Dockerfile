# Stage 1: Build the application using Node.js
FROM node:18-alpine AS build

# Build argument for the Google Maps API Key
ARG VITE_GOOGLE_MAPS_API_KEY=$VITE_GOOGLE_MAPS_API_KEY

# Set environment variables during the build process
ENV VITE_GOOGLE_MAPS_API_KEY=$VITE_GOOGLE_MAPS_API_KEY

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies (using --frozen-lockfile to ensure consistent builds)
RUN npm ci --frozen-lockfile

# Copy the rest of the app source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the built app with NGINX
FROM nginx:alpine

# Copy the build artifacts from the Node.js build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom NGINX configuration
COPY ./nginx/default.conf /etc/nginx/nginx.conf

# Expose port 80 for serving the application
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
