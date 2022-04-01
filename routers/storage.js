const express = require("express");
const { createItem } = require("./../controllers/storage");
const router = express.Router();

router.post(
  "/",
  require("./../utils/handlerStorage").single("myfile"),
  createItem
);

module.exports = router;
