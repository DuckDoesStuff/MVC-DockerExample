# Use Node.js version 14 as the base image
FROM node:21

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Expose port 3000 (the default port for Express.js applications)
EXPOSE 3000

# Command to run the Express.js server
CMD npm run dev
