let contenedor = document.getElementById("contenedor")

let InputRojo = document.getElementById("i-rojo")
let NumeroRojo = document.getElementById("n-rojo")

let InputVerde = document.getElementById("i-verde")
let NumeroVerde = document.getElementById("n-verde")

let InputAzul = document.getElementById("i-azul")
let NumeroAzul = document.getElementById("n-azul")

let rojo = InputRojo.value
let verde = InputVerde.value
let azul = InputAzul.value

NumeroRojo.textContent = InputRojo.value
NumeroVerde.textContent = InputVerde.value
NumeroAzul.textContent = InputAzul.value

function ArmarColor (r,v,a){
    let rgb = "rgb("+r+","+v+","+a+")"
    contenedor.style.backgroundColor = rgb
}

InputRojo.addEventListener("change",(evento)=>{
    rojo = evento.target.value
    NumeroRojo.textContent = rojo
    ArmarColor(rojo,verde,azul)
})
InputVerde.addEventListener("change",(evento)=>{
    verde = evento.target.value
    NumeroVerde.textContent = verde
    ArmarColor(rojo,verde,azul)
})
InputAzul.addEventListener("change",(evento)=>{
    azul = evento.target.value
    NumeroAzul.textContent = azul
    
    ArmarColor(rojo,verde,azul)
})