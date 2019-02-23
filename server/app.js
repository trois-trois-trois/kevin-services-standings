const express = require('express');
const cors = require('cors');
const Standings = require('../database/collections/standings.js');
const db = require('../database/config.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/espn/teamstandings', (req, res) => {
  Standings.reset()
    .orderBy('id', 'DESC')
    .query((qb) => {
      qb.limit(32);
    })
    .fetch()
    .then((data) => {
      res.status(200).send(data.models);
    });
});

app.post('/espn/teamstandings', (req, res) => {
  db.knex('standings').insert({
    team_name: 'The Flying Dutchmen',
    division: 'NFC WEST',
    wins: 9000,
    losses: 0,
    tie: 0,
    percentage: 1.00,
    points_for: 100,
    points_against: 0,
    team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/sea.png&h=40&w=40',
    link: 'https://www.youtube.com/watch?v=WpE_xMRiCLE&t=0s&list=FLI_MZWTHPVBrsOofhX5Ceug&index=86'
  }).then(() => res.status(201).send('Successfully inserted team'));
});

app.put('/espn/teamstandings', (req, res) => {
  db.knex('standings')
    .where({team_name: 'The Flying Dutchmen'})
    .update({team_name: 'Mars Rovers'})
    .then(() => res.status(303).send('Updated team'));
});

app.delete('/espn/teamstandings', (req, res) => {
  db.knex('standings')
    .where({link: 'https://www.youtube.com/watch?v=WpE_xMRiCLE&t=0s&list=FLI_MZWTHPVBrsOofhX5Ceug&index=86'})
    .del()
    .then(() => res.status(303).send('1 team deleted'));
});

module.exports = app;
