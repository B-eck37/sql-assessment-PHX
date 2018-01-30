require("dotenv").config();
const express = require('express'),
      massive = require('massive'),
      bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
  
    // Initialize user table and vehicle table.
    db.init_tables.user_create_seed().then( response => {
      console.log('User table init');
      db.init_tables.vehicle_create_seed().then( response => {
        console.log('Vehicle table init');
      })
    })
  })

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`We got our ears on ${PORT}`))