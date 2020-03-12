FROM node:10.19.0-buster
# WORKDIR specifies the directory our
# application's code will live within
WORKDIR /front
# We copy our package.json file to our
# app directory
COPY package.json /front
# We then run npm install to install
# express for our application
RUN npm install
# We then copy the rest of our application
# to the app direcoty
COPY . /front
# We start our application by calling
# npm start.
CMD ["npm", "start"]
