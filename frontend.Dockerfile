# Use an official Node runtime as a parent image
FROM node:14.17.6-alpine3.14

# Set the working directory to /app/frontend
WORKDIR /app/frontend

# Copy the frontend code into the container
COPY ./frontend /app/frontend

# Install any dependencies
RUN npm install

# Build the frontend code
RUN npm run build

# Expose port 3000 for the frontend app
EXPOSE 3000

# Start the frontend app
CMD ["npm", "start"]
