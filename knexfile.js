module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      user: 'fluffy',
      password: 'troiscubed',
      database: 'espndev',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      user: 'fluffy',
      password: 'troiscubed',
      database: 'espn',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
