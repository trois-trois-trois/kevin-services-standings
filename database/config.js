const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '0.0.0.0',
    user: 'fluffy',
    password: 'troiscubed',
    database: 'espndev',
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
      table.decimal('percentage');
      table.integer('points_for');
      table.integer('points_against');
      table.string('team_logo', 255);
      table.string('link', 255);
    }).then((table) => {
      console.log('Created Table Standings: ', table);
    });
  }
});

module.exports = db;
