const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));
// const listController = require('./controllers/shoplist.js');
// app.use('/shoplist', listController);


mongoose.connect('mongodb://localhost:27017/shoplist');

app.listen(3000, ()=>{
    console.log('listening...');
});

mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
})
