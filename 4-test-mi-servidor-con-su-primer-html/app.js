const { log } = require("console")
let express = require("express")
let path = require("path")

const app = express()

app.listen(3000,()=>{
    console.log("El servidor esta listo");
})
app.get("/",(req,res)=>{
    let rutaHtml_PathHtml = path.join(__dirname,"./view/html.html")
    res.sendFile(rutaHtml_PathHtml)
})