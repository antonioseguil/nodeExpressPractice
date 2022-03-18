const mongoose = require("mongoose");
const dataBaseConnect = () => {
  const uri = process.env.DB_URI;
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err, res) =>{
      if (!err) {
          console.log("Conexión exitosa");
      }else{
          console.log("Error de conexión");
      }

  });
};

module.exports = dataBaseConnect;
