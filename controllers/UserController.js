const User = require("../models/UserModel");
// create gift
// add Gift to cart
// get UserCart

async function getUserCart(req, res) {
  const user = await User.findById("656366bdbce6cde322f75d88");
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
  const results = [];
  try {
    const products = req.body.products;
    for (const productData of products) {
      const { type, name, description, price } = productData;
      const newProduct = new Product({
        type,
        name,
        description,
        price,
      });

      const result = await newProduct.save();
      results.push(result);
    }
    return res.status(201).json({
      results,
      message: "Gift Created Successfully",
    });
  } catch (error) {
    console.error("Error creating gift:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  AddProductToCart,
  createGift,
};
