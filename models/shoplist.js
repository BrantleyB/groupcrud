const mongoose = require('mongoose');

const shoplistSchema = new mongoose.Schema({
  name: String,
  qty: Number
});

const Shoplist = mongoose.model('Shoplist', shoplistSchema);

module.exports = Shoplist;
