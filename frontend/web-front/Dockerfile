# Dockerfile for web-front

# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /home/app/frontend

# # Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# # Install Node.js dependencies
# RUN npm install

# Copy the rest of the client code to the container
COPY . ./

# # Build the Next.js application
# RUN npm run build

# # Remove the EXPOSE statement, as it's not needed

# # Command to start the application
# CMD ["npm", "start"]