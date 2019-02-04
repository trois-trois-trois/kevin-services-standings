const express = require('express');
const cors = require('cors');
const Standings = require('../database/collections/standings.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/espn/teamstandings', (req, res) => {
  Standings.reset()
    .fetch()
    .then((data) => {
      res.status(200).send(data.models);
    });
});

module.exports = app;
