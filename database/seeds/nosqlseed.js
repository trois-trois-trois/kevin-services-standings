const faker = require('faker');
const db = require('../nosqlconfig.js');

const startTime = new Date().getTime();

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const getRandomDivision = () => {
  const division = ['NFC', 'AFC'];
  const compass = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
  return `${division[getRandomInt(division.length)]} ${compass[getRandomInt(compass.length)]}`;
};

const getRandomTeamLogo = () => {
  const logos = [
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ari.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/atl.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/bal.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/buf.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/car.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/chi.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/cin.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/cle.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/dal.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/den.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/det.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/gb.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/hou.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ind.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/jax.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/kc.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/lar.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/mia.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/min.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ne.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/no.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/nyg.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/nyj.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/oak.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/phi.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/pit.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/lac.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/sf.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/sea.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/tb.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ten.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/wsh.png&h=40&w=40',
  ];
  return logos[getRandomInt(logos.length)];
};

const generateDataSet = (firstID, numOfRecords) => {
  const acc = [];
  for (let i = firstID; i <= numOfRecords; i++) {
    const team = {
      query: 'INSERT INTO espn.standings (id,division,link,losses,percentage,points_against,points_for,team_logo,team_name,tie,wins) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
      params: [
        i,
        getRandomDivision(),
        'https://www.youtube.com/watch?v=Fg9IjJSSMRQ',
        getRandomInt(20),
        Math.random(),
        faker.random.number(),
        faker.random.number(),
        getRandomTeamLogo(),
        `${faker.address.city()} ${faker.random.word()}`,
        getRandomInt(5),
        getRandomInt(20)
        ]
    };
    acc.push(team);
  }
  return acc;
};

db.batch(generateDataSet(1, 32), { prepare: true }).then(result => console.log('Inserted record'));

// console.log('1 insertion took ', new Date().getTime() - startTime, 'ms');
