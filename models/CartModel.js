const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  gifts: Array,
  products: Array,
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
