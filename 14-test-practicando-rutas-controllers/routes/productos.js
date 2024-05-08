const express = require("express")
const app = express()
const router = express.Router()
const productsController = require("../controllers/productsController.js")

router.get("/:idProducto", productsController.producto) // http://localhost:3000/productos/3
router.get("/:idProducto/comentarios/:idComentario?", productsController.comentario) // http://localhost:3000/productos/3/comentarios/4


module.exports = router