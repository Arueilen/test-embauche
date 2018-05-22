const express = require('express');

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const list = require('./routes/list.js');
const createDog = require('./routes/createDog.js');
const createOwner = require('./routes/createOwner.js');

global.DOG_HOST = process.env.DOG_HOST || 'localhost:8080';
global.OWNER_HOST = process.env.OWNER_HOST || 'localhost:8082';

const launchServer = () => {
  app.get('/owners', list);
  app.post('/dogs', createDog);
  app.post('/owners', createOwner);

  const port = process.env.APP_PORT || 8083
  app.listen(port);
  console.log('Server listening on port %s', port)
}

launchServer();
