const express = require("express");
const fs = require("fs");
const router = express.Router();

const removeExtension = (filename = "") => {
  console.log(filename);
  return filename.split(".").shift();
};

const PATH_ROUTERS = __dirname;

fs.readdirSync(PATH_ROUTERS).forEach((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    router.use(`/${name}`, require(`./${name}`));
  }
});

module.exports = router;
