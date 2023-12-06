const User = require("../models/UserModel");
const Product = require("../models/ProductModel");
const Cart = require("../models/CartModel");
// create gift
// add Gift to cart

// get UserCart
// completeOrder
async function completeOrder(req, res) {
  // post name  info
}

/////////////
async function getUserCart(req, res) {
  //   const user = await User.findById("656366bdbce6cde322f75d88");
  const { id } = req.params;

  const userCart = await User.find(id);

  return res.status(200).json({
    Message: " user cart",

    userCart,
  });
}

async function AddProductToCart(req, res) {
  const { productID } = req.params;
  //req.userID
  const user = await User.findById("656366bdbce6cde322f75d88");

  user.cart = [...user.cart, ...productID];
  await user.save();

  return res.status(200).json({
    Message: "product added to a user cart",
  });
}

async function createGift(req, res) {
  try {
    const user = await User.findById("656366bdbce6cde322f75d88");
    const { gift } = req.body; // array destructring

    user.cart = [...user.cart, gift];
    await user.save();
  } catch (error) {
    console.error("Error creating gift:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  AddProductToCart,
  createGift,
  getUserCart,
  completeOrder,
};
