# patient-support/Dockerfile

# Use the official Node.js image from the Docker Hub
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the app files
COPY . .

# Build the app
RUN npm run build

# Serve the app using NGINX
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom NGINX configuration
COPY ./nginx/default.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
