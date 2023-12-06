const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  type: String,
  name: String,
  description: String,
  price: Number,
  brightness: String,
  watering: String,
  temperature: String,
  images: Array,
  dateAdded: Date,
  inCart: Boolean,
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
