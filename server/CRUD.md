## GET '/espn/teamstandings'

- Request received when status code ``200`` is given
- Will grab the last 100 records from the DBMS
- Renders all 100 records to the DOM

```
app.get('/espn/teamstandings', (req, res) => {
  Standings.reset()
    .orderBy('id', 'DESC')
    .query((qb) => {
      qb.limit(100);
    })
    .fetch()
    .then((data) => {
      res.status(200).send(data.models);
    });
});
```

---

## POST '/espn/teamstandings'

- Request status code ``201`` is given
- Will add a dummy record to the database and render it to the DOM

```
app.post('/espn/teamstandings', (req, res) => {
  db.knex('standings').insert({
    team_name: 'The Flying Dutchmen',
    division: 'NFC WEST',
    wins: 9000,
    losses: 0,
    tie: 0,
    percentage: 1.00,
    points_for: 100,
    points_against: 0,
    team_logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/sea.png&h=40&w=40',
    link: 'https://www.youtube.com/watch?v=WpE_xMRiCLE&t=0s&list=FLI_MZWTHPVBrsOofhX5Ceug&index=86'
  }).then(() => res.status(201).send('Successfully inserted team'));
});
```

---

## PUT '/espn/teamstandings'

- Updates the dummy record inserted by the ``POST`` route
- Request status code ``303`` is given

```
app.put('/espn/teamstandings', (req, res) => {
  db.knex('standings')
    .where({team_name: 'The Flying Dutchmen'})
    .update({team_name: 'Mars Rovers'})
    .then(() => res.status(303).send('Updated team'));
});
```

---

## DELETE '/espn/teamstandings'

- Deletes the dummy record inserted by the ``POST`` route
- Request status code ``303`` is given

```
app.delete('/espn/teamstandings', (req, res) => {
  db.knex('standings')
    .where({link: 'https://www.youtube.com/watch?v=WpE_xMRiCLE&t=0s&list=FLI_MZWTHPVBrsOofhX5Ceug&index=86'})
    .del()
    .then(() => res.status(303).send('1 team deleted'));
});
```

---