const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const StandingsModel = require('../database/');


const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(`this is db: ${db}`);

// const testEntry = new StandingsModel({
//   team_name: 'JKR Hackers',
//   division: 'XFL ALL',
//   wins: 16,
//   losses: 0,
//   tie: 0,
//   percentage: 100,
//   points_for: 1500,
//   points_against: 200,
// });

// testEntry.save();

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
