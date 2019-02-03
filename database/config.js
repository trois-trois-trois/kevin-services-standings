const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'fluffly',
    password: 'troiscubed',
    database: 'espn',
  },
});

const db = require('bookshelf')(knex);

db.knex.schema.hasTable('standings').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('standings', (table) => {
      table.increments('id').primary();
      table.string('team_name', 255);
      table.string('division', 255);
      table.integer('wins');
      table.integer('losses');
      table.integer('tie');
      table.integer('percentage');
      table.integer('points_for');
      table.string('team_logo', 255);
      table.string('link', 255);
    }).then((table) => {
      console.log('Created Table: ', table);
    });
  }
});

module.exports = db;
