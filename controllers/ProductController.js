const Product = require("../models/ProductModel");
const User = require("../models/UserModel");
async function getProducts(req, res) {
  const Products = await Product.find();
  return res.status(200).json({
    Products: Products,
  });
}

async function createProduct(req, res) {
  const { type, name, description, price, brightness, watering, temperature } =
    req.body;
  const NewProduct = new Product({
    type,
    name,
    description,
    price,
    brightness,
    watering,
    temperature,
    dateAdded: new Date(),
  });
  const result = await NewProduct.save();
  return res.status(201).json({
    result,
    message: "Product Created Successfully",
  });
}

async function getProductByType(req, res) {
  const { type } = req.params;
  const filter = { type: type };
  const products = await Product.find(filter);

  return res.status(200).json({
    products,
  });
}

async function getProductById(req, res) {
  const { id } = req.params;
  const product = await Product.findById(id);

  return res.status(200).json({
    product,
  });
}

async function getNewProducts(req, res) {
  const oneWeekAgo = new Date();
  const currentDate = new Date();
  oneWeekAgo.setDate(currentDate.getDate() - 7);
  const filter = {
    dateAdded: {
      $gte: oneWeekAgo,
      $lte: currentDate,
    },
  };
  const products = await Product.find(filter);

  return res.status(200).json({
    products,
  });
}

module.exports = {
  getProducts,
  createProduct,
  getProductByType,
  getProductById,
  getNewProducts,
};
