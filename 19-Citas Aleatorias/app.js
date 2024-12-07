let texto = document.querySelector(".texto")
let autor = document.querySelector(".autor")
let boton = document.querySelector(".boton")

function NumeroRandom() {
    return Math.floor(Math.random()* citas.length)
}

function CitaRandom() {
    texto.textContent = citas[NumeroRandom()].texto
    autor.textContent = citas[NumeroRandom()].autor
}
boton.addEventListener("click",CitaRandom)
