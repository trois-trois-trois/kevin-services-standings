const express = require('express');
const cors = require('cors');
const db = require('../database/nosqlconfig.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../client/dist`));

const getStandings = ('SELECT * FROM espn.standings limit 100');

app.get('/espn/teamstandings', (req, res) => {
  db.execute(getStandings, [], (err, data) => {
    if (err) {
      console.log('ERROR getting Standings: ----------> ', err);
    } else {
      res.status(200).send(data.rows);
    }
  });
});

module.exports = app;
