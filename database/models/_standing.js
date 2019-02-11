const db = require('../config.js');

const Standing = db.Model.extend({
  tableName: 'standings',
});

module.exports = Standing;
