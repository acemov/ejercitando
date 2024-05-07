// Express
const express = require("express")
const app = express()
// Path
const path = require("path")
// Incorporando Rutas

const first = {
    saludo: (req,res)=>{
        res.send("Estas en el producto: "+req.params.idProducto)
    }
}

module.exports = first