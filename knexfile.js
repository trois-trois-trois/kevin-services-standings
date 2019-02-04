module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'fluffy',
      password: 'troiscubed',
      database: 'espn',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'fluffy',
      password: 'troiscubed',
      database: 'espn',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
