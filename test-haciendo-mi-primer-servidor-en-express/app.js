let express = require("express")
let app = express()

app.listen(3000,()=> console.log("Todo bien"))

app.get(("/"), function (req,res) {
    res.send("Bienvenido a tu primer servidor")
})