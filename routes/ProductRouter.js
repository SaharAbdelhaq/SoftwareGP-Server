const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductByType,
  getProductById,
  getNewProducts,
} = require("../controllers/ProductController");

router.get("/getProducts", getProducts);
router.post("/createProduct", createProduct);
router.get("/getProducts/:type", getProductByType);
router.get("/getProductById/:id", getProductById);
router.get("/getNewProducts", getNewProducts);

module.exports = router;
