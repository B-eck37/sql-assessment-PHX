require("dotenv").config();
const express = require('express'),
      massive = require('massive'),
      bodyParser = require('body-parser');
      sqlCtrl = require('./controller/sql_controller');

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



app.get('/api/users', sqlCtrl.getUsers);
app.get('/api/vehicles', sqlCtrl.getVehicles);
app.get('/api/user/:userId/vehiclecount', sqlCtrl.getVehicleCount);
app.get('/api/user/:userId/vehicle', sqlCtrl.getUserVehicles);
app.get('/api/vehicle', sqlCtrl.getByThings);
// app.get('/api/vehicle', sqlCtrl.getLetters);

app.get('/api/newervehiclesbyyear', sqlCtrl.getByYear);

app.post('/api/users', sqlCtrl.addUser);
app.post('/api/vehicles', sqlCtrl.addVehicle);

app.put('/api/vehicle/:vehicleId/user/:userId', sqlCtrl.changeOwnership);

app.delete('/api/user/:userId/vehicle/:vehicleId', sqlCtrl.deleteOwnership);
app.delete('/api/vehicle/:vehicleId', sqlCtrl.deleteVehicle);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`We got our ears on ${PORT}`))