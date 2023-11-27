const express = require("express");
const router = express.Router();

const {
  createGift,
  AddProductToCart,
} = require("../controllers/UserController");

router.post("/createGift", createGift);
router.post("/addProductToCart/:productID", AddProductToCart);

module.exports = router;
