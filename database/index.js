const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/standings');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

module.exports = mongoose.model('StandingsModel', {
  team_name: String,
  division: String,
  wins: Number,
  losses: Number,
  tie: Number,
  percentage: Number,
  points_for: Number,
  points_against: Number,
});

module.exports = db;
