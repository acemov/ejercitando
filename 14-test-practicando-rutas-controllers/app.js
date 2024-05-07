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

app.get("/producto/:idProducto", (req, res) => {
    res.send("Bienvenido al detalle del producto: " + req.params.id);
});

app.get("/producto/:idProducto/comentarios/:idComentario?", (req, res) => {
    if (req.params.idComentario == undefined) {
        res.send("Bienvenido al detalle del producto: " +req.params.idProducto +". Pero sin comentarios"
        );
    } else {
        res.send("Bienvenido al detalle del producto: " + req.params.idProducto + ". En el comentario " + req.params.idComentario);
    }
});
