FROM node:9-alpine

#Install application
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN rm -rf /usr/src/app/node_modules
RUN npm install --production

CMD [ "npm", "start" ]
