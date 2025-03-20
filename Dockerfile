# Use the official Nginx image from Docker Hub as the base
FROM nginx:alpine

# Copy your custom nginx.conf into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy your website files into the container's default HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 (internal to the container)
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]