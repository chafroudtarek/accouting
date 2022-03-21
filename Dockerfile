FROM node:14.18.0
MAINTAINER MOVE UP EDUCATION <tn.moveup@gmail.com>

# Create a directory (to house our source files) and navigate to it.
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./ 
  
# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the specified port back to the host machine.
EXPOSE ${PORT}