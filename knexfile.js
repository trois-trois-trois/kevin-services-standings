module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'fluffly',
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
      user: 'taco',
      password: 'tuesday',
      database: 'espn',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
