const db = require('../config.js');
const Standing = require('../models/standing.js');

const Standings = new db.Collection();

Standings.model = Standing;

module.exports = Standings;
