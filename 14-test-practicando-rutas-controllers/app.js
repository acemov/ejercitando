// Express
const express = require("express");
const app = express();
// Path
const path = require("path");
// Incorporando Rutas
const rutasProductos = require("./routes/productos.js");
// Usar recursos de Public
app.use(express.static(path.join(__dirname, "/public")));
// Levantar el servidor
app.listen(3000, () => {
    console.log("Open");
});


app.use("/productos",rutasProductos) //http://localhost:3000/productos/3
