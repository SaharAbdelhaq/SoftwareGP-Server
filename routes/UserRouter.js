const express = require("express");
const router = express.Router();
const { signup, signin, logout } = require("../controllers/UserController");
const {
  createGift,
  AddProductToCart,
  getUserCart,
} = require("../controllers/UserController");

router.post("/signup", signup);
router.get("/signin", signin);
router.post("/logout", logout);

router.post("/createGift", createGift);
router.post("/addProductToCart/:productID", AddProductToCart);
router.post("/getUserCart/:id", getUserCart);
module.exports = router;
