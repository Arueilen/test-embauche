FROM node:9-alpine

#Install application
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --production
COPY . /usr/src/app

CMD [ "npm", "start" ]
