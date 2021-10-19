//  SERVER (implemented in node.js)

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const routes = require('./routes/index');
const cors = require('cors');
const PORT = process.env.port||4000;

//connexion to MongoDb
mongoose.connect('mongodb+srv://yaacov:Yaacov44@cluster0.hqpcj.mongodb.net/Balink',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('SUCCESS !'))
  .catch(() => console.log('ERROR !'));

//use express.js
const app = express();

app.use(morgan('dev'));
app.use(express.json());

//use cors
app.use(cors());

app.use('/api',routes);

app.listen(PORT,()=>{
    console.log(`started on port ${PORT}`);
})

