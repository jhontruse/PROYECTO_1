require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("storage")); //* Para poder usar la informacion desde un navegador

const port = process.env.PORT || 3000;

//* Aqui invocamos a las rutas
//* localhost/api/_________________
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

dbConnect();
