let fondo = document.getElementsByClassName("fondo")[0]
let boton = document.getElementsByClassName("boton")[0]
let texto = document.getElementsByClassName("texto")[0]

function RandomNyL() {
    let letrasYnumeros = "ABCDEF0123456789"
    let Indice = Math.floor(Math.random() * letrasYnumeros.length)
    return letrasYnumeros[Indice]
}

boton.addEventListener("click", () => {
    let NyL = ""
    for (let i = 0; i < 6; i++) {
        NyL += RandomNyL()
    }
    let colorRandom = "#" + NyL

    console.log(colorRandom);
    fondo.style.backgroundColor = colorRandom
    texto.textContent = colorRandom
})