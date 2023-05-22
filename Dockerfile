# Base image
FROM node:19-alpine

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# Copy source code
COPY . .

# Build the app
RUN yarn build api

# Expose port and start the app
EXPOSE 3333
CMD ["node", "dist/apps/api/main.js"]
