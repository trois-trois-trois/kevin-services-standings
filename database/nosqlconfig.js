const cassandra = require('cassandra-driver');

const db = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  protocolOptions: { port: 9160 },
  localDataCenter: 'datacenter1',
});

db.connect((err) => {
  if (err) console.log('Error connecting', err);
  else {
    console.log('Connected to Cassandra');
  }
});

const insertKeyspace = "CREATE KEYSPACE IF NOT EXISTS espn WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 1};";
const useKeyspace = 'USE espn;';
const createTable = 'CREATE TABLE IF NOT EXISTS standings (uid uuid PRIMARY KEY, division text, link text, losses int, percentage decimal, points_against int, points_for int, team_logo text, team_name text, tie int, wins int);';

db.execute(insertKeyspace, [])
  .then(result => db.execute(useKeyspace, [], (err) => {
    if (err) {
      console.log('ERROR using espn', err);
    } else {
      console.log('Using ESPN keyspace');
    }
  }))
  .then(result => db.execute(createTable, [], (err) => {
    if (err) {
      console.log('ERROR creating table', err);
    } else {
      console.log('Standings Table created');
    }
  }));


module.exports = db;
