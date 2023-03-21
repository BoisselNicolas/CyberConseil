'use strict';

const mongoose = require('mongoose');
const express = require('express');


/**
 * Import MongoClient & connexion à la DB
 */

mongoose.connect(process.env.URL_MONGO, function (err) {
  if (err) { throw err; }
  else { console.log("connecté à la base de données") }
});


// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});