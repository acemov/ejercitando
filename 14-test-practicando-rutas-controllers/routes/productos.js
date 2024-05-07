const express = require("express")
const app = express()
const router = express.Router()
const firstController = require("../controllers/firstController.js")

router.get("/producto/:idProducto", firstController.saludo)