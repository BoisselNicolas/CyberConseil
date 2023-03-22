'use strict';
const mongoose = require('mongoose');
const express = require('express');

var cors = require('cors')


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
    id: Number,
    question: String,
    response: Object
  }
);
  

let Question = mongoose.model('questions', QuestionsSchema);


// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.get('/addQuestion', (req, res) => {

  let newQuestion = new Question({
      id: '1',
      question: 'Effectuez-vous des sauvegardes régulières ?',
      response: {
        r1: {
          value: 'Oui',
          conseil: '',
          next_id: ''
        },
        r2: {
          value: 'De temps en temps',
          conseil: '',
          next_id: ''
        }, 
        r3: {
          value: 'Non',
          conseil: '',
          next_id: ''
        }
      }
  })

  newQuestion.save().then(() => {
      res.send("ajouté");
  }).catch((err) => {
      console.error(err);
      res.status(500).send("Erreur lors de l'ajout de la question");
  });
});

app.get('/getQuestions', (req, res) => {

  Question.find({id: req.query.id_question})
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
