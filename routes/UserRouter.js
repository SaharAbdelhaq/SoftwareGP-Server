const express = require("express");
const router = express.Router();

const {
  createGift,
  AddProductToCart,
  getUserCart,
} = require("../controllers/UserController");

router.post("/createGift", createGift);
router.post("/addProductToCart/:productID", AddProductToCart);
router.post("/getUserCart/:id", getUserCart);
module.exports = router;
