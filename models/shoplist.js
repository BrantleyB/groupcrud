const mongoose = require('mongoose');

const shoplistSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  coupons: Boolean
});

const Shoplist = mongoose.model('Shoplist', shoplistSchema);

module.exports = Shoplist;
