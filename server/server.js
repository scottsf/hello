require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let massive = require('massive');
let ctr = require('./controller.js');

let app = express();
app.use(bodyParser.json());

massive(process.env.DB_URI).then(instance => {
  console.log('Massive attack!');
  app.set('db', instance);
});

app.post('/api/register', ctr.registerUser);

let PORT = 4000;
app.listen(PORT, () => console.log(`App is running on: ${PORT}`));
