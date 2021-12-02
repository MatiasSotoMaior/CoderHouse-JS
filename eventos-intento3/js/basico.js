

let nombre = localStorage.getItem("nombre")
if (nombre === null) {
    nombre = prompt("ingrese nombre de usuario")
    localStorage.setItem("nombre", nombre)
}
let bienvenido = document.getElementById("wellcome")
bienvenido.innerHTML = "Bienvenido " + nombre;

let startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", () => {
    let buscador = document.getElementById(article)

    const p = document.createElement("p")
    p.textContent = "Elija el barrio donde quiere buscar"

    buscador.appendChild(p)
})
