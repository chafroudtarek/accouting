FROM node:14.18.0
MAINTAINER MOVE UP EDUCATION <tn.moveup@gmail.com>

# Installing bash.
# RUN apk add --no-cache bash bash-doc bash-completion

# Create a directory (to house our source files) and navigate to it.
WORKDIR /usr/src/app

# Copy over the bash script to test and wait on the availability of a TCP host and port.
COPY ./wait-for-it.sh /src/
RUN chmod +x /src/wait-for-it.sh
 
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./ 
  
# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the specified port back to the host machine.
EXPOSE ${PORT}

# Starting Script
#CMD [ "npm", "run" ,"start" ]