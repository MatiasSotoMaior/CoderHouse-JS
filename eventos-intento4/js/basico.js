///////////ARRAYS
/* 
const propiedad = [{ precio: 120000, barrio: "Parque Jularo", sup: 1250 },
    { precio: 220000, barrio: "Parque Exaltacion", sup: 1300 },
    { precio: 310000, barrio: "Parada Robles", sup: 1400 },
    { precio: 470000, barrio: "El Remanso", sup: 2000 }
];

let rtaAccion = prompt("¿Que acción le interesa realizar?\nA)Buscar propiedad segun el barrio\nB)Ordenar por precio\nC)Ordenar por tamaño de superficie")

if (rtaAccion.toUpperCase() === "A") {
    let rtaA = prompt("¿Qué barrio le interesa?\nA)El Remanso\nB)Parque Jularo\nC)Parque Exaltacion")
    if (rtaA.toUpperCase() === "A") {
        const buscarRemanso = propiedad.find(propiedad => propiedad.barrio === "El Remanso");
        console.log("En esa zona tenemos una propiedad con " + buscarRemanso.sup + "m2 de superficie y USD" + buscarRemanso.precio);
    } else if (rtaA.toUpperCase() === "B") {
        const buscarJularo = propiedad.find(propiedad => propiedad.barrio === "Parque Jularo");
        console.log("En esa zona tenemos una propiedad con " + buscarJularo.sup + "m2 de superficie y USD" + buscarJularo.precio);
    } else if (rtaA.toUpperCase() === "C") {
        const buscarExaltacion = propiedad.find(propiedad => propiedad.barrio === "Parque Exaltacion");
        console.log("En esa zona tenemos una propiedad con " + buscarExaltacion.sup + "m2 de superficie y USD" + buscarExaltacion.precio);
    }
}
if (rtaAccion.toUpperCase() === "B") {
    propiedad.sort((a, b) => {
        if (a.precio < b.precio) {
            return -1;
        }
        if (a.precio > b.precio) {
            return 1;
        }
        return 0;
    })
    console.log(propiedad)
}
if (rtaAccion.toUpperCase() === "C") {
    propiedad.sort((a, b) => {
        if (a.sup < b.sup) {
            return -1;
        }
        if (a.sup > b.sup) {
            return 1;
        }
        return 0;
    })
    console.log(propiedad)
} */

//Bienvenido
let nombre = localStorage.getItem("nombre")
if (nombre === null) {
    nombre = prompt("ingrese nombre de usuario")
    localStorage.setItem("nombre", nombre)
}
let bienvenido = document.getElementById("wellcome")
bienvenido.innerHTML = "Bienvenido " + nombre;
//Bienvenido ends

//Buscador por barrio
let startBtn = document.getElementById("jularo")
startBtn.addEventListener("click", () => {

        const div = document.createElement("ul")
        div.innerHTML = '<h3>Casa en Jularo</h3><img src="https://images.clarin.com/2020/09/01/una-tipica-casa-country-de___VFHn8kGwe_1200x630__1.jpg">'
        document.body.appendChild(div)
    })
    //        let buscador = document.getElementById(article)
let remanso = document.getElementById("remanso")
remanso.addEventListener("click", () => {

    const div = document.createElement("ul")
    div.innerHTML = '<h3>Casa en El Remanso</h3><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFHypaH-7Sc3G4RhBc722Z-j4hBu2nM7-Qw&usqp=CAU">'
    document.body.appendChild(div)
})
let robles = document.getElementById("robles")
robles.addEventListener("click", () => {

    const div = document.createElement("ul")
    div.innerHTML = '<h3>Casa en Parada Robles</h3><img src="https://images.homify.com/c_fill,f_auto,q_0,w_740/v1503396481/p/photo/image/2190786/imagem-176.jpg">'
    document.body.appendChild(div)
})