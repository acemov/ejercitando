const express = require("express")
const app = express()

const path = require("path")

const RutaDePublic = path.join(__dirname, "./public") //obtenemos la ruta completa de la carpeta public

app.use(express.static(RutaDePublic))
/* con "app.use" hace que usemos archivos estaticos y "express.static" recibe una ruta
 */
app.listen(3000, () => {
    console.log("El servidor esta corriendo");
})