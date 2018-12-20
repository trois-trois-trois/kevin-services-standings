const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tattooAssistant/newClient');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});


module.exports = db;
