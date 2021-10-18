const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
var cors = require('cors');

//connexion to MongoDb
mongoose.connect('mongodb+srv://yaacov:Yaacov44@cluster0.hqpcj.mongodb.net/Balink',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('SUCCESS !'))
  .catch(() => console.log('ERROR !'));

//use express.js
const app = express();
app.use(express.json());

//use cors
app.use(cors());

app.use('/',routes);
app.listen(4000,()=>{
    console.log('started on port 4000');
})

