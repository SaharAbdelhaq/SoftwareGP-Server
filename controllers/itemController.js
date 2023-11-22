const Item = require("../models/itemModel");

async function getItems(req, res) {
  const items = await Item.find();
  return res.status(200).json({
    items: items,
  });
}

async function createItem(req, res) {
  const { name, description, price } = req.body;

  const newItem = new Item({ name, description, price });

  await newItem.save();
  return res.status(201).json({
    message: "Item created successfully",
  });
}

module.exports = {
  getItems,
  createItem,
};
