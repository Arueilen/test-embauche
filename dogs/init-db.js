// La variable mongoose nous permettra d'utiliser les fonctionnalités du module mongoose.
const mongoose = require('mongoose');

module.exports = new Promise((resolve, reject) => {
  //URL de notre base
  const {
    DB_CONNECTION = 'root:example@localhost/admin',
  } = process.env;
  const urlmongo = `mongodb://${DB_CONNECTION}`;

  // Nous connectons l'API à notre base de données
  mongoose.connect(urlmongo);

  const db = mongoose.connection;
  db.on('error', reject);
  db.once('open', () => {
    resolve({ db, mongoose });
  });
});
