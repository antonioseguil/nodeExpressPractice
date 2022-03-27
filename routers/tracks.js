const express = require("express");
const router = express.Router();
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("./../controllers/tracks.js");

router.get("/", getItems);
router.post("/", createItem);

module.exports = router;
