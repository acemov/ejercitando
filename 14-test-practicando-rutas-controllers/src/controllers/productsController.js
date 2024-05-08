// Express
const express = require("express")
const app = express()
// Path
const path = require("path")
// Incorporando Rutas

const products = {
    producto: (req, res) => {
        if (req.params.idProducto == undefined) {
            res.send("Este ID de producto no exite")
        } else {
            res.send("Estas en el producto: " + req.params.idProducto)
        }
    },
    comentario: (req, res) => {
        if (req.params.idComentario == undefined) {
            res.send("Bienvenido al detalle del producto: " + req.params.idProducto + ". Pero sin comentarios"
            );
        } else {
            res.send("Bienvenido al detalle del producto: " + req.params.idProducto + ". En el comentario " + req.params.idComentario);
        }
    }
}

module.exports = products