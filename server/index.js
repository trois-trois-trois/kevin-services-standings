const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');


const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(`this is db: ${db}`);

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
