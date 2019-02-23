module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'ec2-34-217-108-173.us-west-2.compute.amazonaws.com',
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
      host: 'ec2-34-217-108-173.us-west-2.compute.amazonaws.com',
      user: 'fluffy',
      password: 'troiscubed',
      database: 'espn',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
