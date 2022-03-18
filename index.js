//REQUERIMIENTOS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
//PUERTO
const port = process.env.PORT || 3000;
const app = express();
app.use(cors);

app.listen(port, () => {
  console.log("El servidor esta que corre en el servidor: " + port);
});
