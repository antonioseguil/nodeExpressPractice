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
  console.log(name);
  if (name !== "index") {
    console.log(`Cargando ruta /${name}`);
    router.use(`/${name}`, require(`./${name}`));
  }
});

module.exports = router;
