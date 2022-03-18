//REQUERIMIENTOS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo.js");
//PUERTO
const port = process.env.PORT || 3000;
const app = express();
app.use(cors);

app.listen(port, () => {
  console.log("El servidor esta que corre en el servidor: " + port);
});

dbConnect();
