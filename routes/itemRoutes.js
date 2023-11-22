const express = require("express");
const router = express.Router();
const { createItem, getItems } = require("../controllers/itemController");

router.get("/getItems", getItems);

router.post("/createItem", createItem);

module.exports = router;
