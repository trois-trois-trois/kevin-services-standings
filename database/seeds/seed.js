const faker = require('faker');

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const getRandomDivision = () => {
  const division = ['NFC', 'AFC'];
  const compass = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
  return `${division[getRandomInt(division.length)]} ${compass[getRandomInt(compass.length)]}`;
};

const generateDataSet = (numOfRecords) => {
  const acc = [];
  for (let i = 0; i < numOfRecords; i++) {
    const team = {
      id: i,
      team_name: `${faker.address.city()} ${faker.random.word()}`,
      division: getRandomDivision(),
      wins: faker.random.number(),
      losses: faker.random.number(),
      tie: faker.random.number(),
      percentage: Math.random(),
      points_for: faker.random.number(),
      points_against: faker.random.number(),
      team_logo: faker.image.avatar(),
      link: 'https://www.youtube.com/watch?v=Fg9IjJSSMRQ',
    };
    console.log('Saved record: ', i);
    acc.push(team);
  }
  return acc;
};

exports.seed = knex => knex('standings').del()
  .then(() => knex.batchInsert('standings', generateDataSet(10000000), 1000));
