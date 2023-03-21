'use strict';
const mongoose = require('mongoose');
const express = require('express');


console.log(process.env.URL_MONGO);
/**
 * Import MongoClient & connexion à la DB
 */

mongoose.connect(process.env.URL_MONGO, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));



const QuestionsSchema = mongoose.Schema(
  {
    //_id: mongoose.ObjectId,
    question: String,
    nice: String,
    bad: String
  }
);
  

let Question = mongoose.model('questions', QuestionsSchema);


// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});


app.get('/addQuestion', (req, res) => {

  let newQuestion = new Question({
      question: 'comment vas tu ',
      nice: 'nice',
      bad: 'bad'
  })

  newQuestion.save().then(() => {
      res.send("ajouté");
  }).catch((err) => {
      console.error(err);
      res.status(500).send("Erreur lors de l'ajout de la question");
  });
});

app.get('/getQuestions', (req, res) => {
  Question.find({})
    .exec()
    .then((obj) => {
      if (obj != null) {
        res.send(obj);
      }
    })
    .catch((err) => {
      throw err;
    });
});


app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
