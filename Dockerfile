FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json

RUN npm install

COPY . /usr/src/app

RUN npm build

EXPOSE 3000
CMD npm start