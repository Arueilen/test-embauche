const express = require('express');

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./init-db.js');
const Dogs = require('./models/Dog.js');

const list = require('./routes/list.js');
const create = require('./routes/create.js');

const initModels = async () => {
  const { mongoose } = await db;
  console.log('DB connected');
  return {
    Dogs: new Dogs(mongoose)
  };
};

const launchServer = (models) => {
  app.use((req, res, next) => {
    req.models = models;
    next();
  });

  app.get('/', list);
  app.post('/', create);

  const port = process.env.APP_PORT || 8080
  app.listen(port);
  console.log('Server listening on port %s', port)
}

initModels().then(launchServer).catch(err => {
  console.trace(err);
  process.exit(1);
});
