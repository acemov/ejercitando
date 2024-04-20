let express = require("express")
let app = express()

app.listen("8000",function () {
    console.log("El servidor esta arrancando");
})
app.get("/",function (req, res) {
    res.send("esta en la ruta principal 🙋")
})
app.get("/EstaRutaEsUnArray",function (req, res) {
    res.send([1,2,45,6,8,6,3,73,false,true,"estas viendo un array 😊"])
})
app.get("/EstaRutaEsUnObjetoLiteral",function (req, res) {
    res.send({
        acido: "Soy un acido 🤯",
        feliz: "Intenta siempre estar feliz 😊"
    })
})