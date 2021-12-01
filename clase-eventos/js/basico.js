//EJERCICIO 4 CON FOR

/* let sumatoria = 0;
for (let i = 1; i <= 10; i++) {
    alert(i) 
}*/

//EJERCICIO DESAFIO

// alert(" Ingrese la palabra clave. \n Pista: \n ¿En qué ciudad se ubica la Torre Eiffel?")
// let isPasswordOk = false;
// for (let i = 1; i < 4; i++) {
//     let password = prompt("Tiene 3 intentos");
//     if (password.toLowerCase() === "paris") {
//         isPasswordOk = true;
//         break;
//     }
// }
// if (isPasswordOk) {
//     alert("¡Muy bien!")
// } else {
//     alert("La palabra era paris")
// }

// EJERCICIO FUNCIONES

// function sumarNumeros(numero1, numero2) {
//     const resultado(numero1 + numero2)
//     alert(resultado);
// }
// sumarNumeros(1, 2)

// DESAFIO CLASE 4

// function calcularArea(base, altura) {
//     let areaRectangulo = base * altura;
//     return areaRectangulo;
// }

// function mostrarArea(area) {
//     alert("El área del rectangulo es: " + area + "cm2");
// }

// let base = parseInt(prompt("Ingrese la base del rectangulo (cm)"));
// let altura = parseInt(prompt("Ingrese la altura del rectangulo (cm)"));

// mostrarArea(calcularArea(base, altura));

// DESAFIO COMP CLASE 4

// function calcularIva(precio, iva) {
//     let resultado = precio * iva;
//     return resultado;
// }

// function precioFinal(Total) {
//     alert("Total a pagar: " + Total);
// }

// let precioSinIva = parseInt(prompt("Para saber cuanto es el total de su producto incluyendo iva, introduzca el precio sin iva aqui"));
// const iva = 1.21;

// precioFinal(calcularIva(precioSinIva, iva));

//RESERVAS

// let rtaPago = prompt("Usted ha elegido la propiedad 1, la reserva es de $10.000 ¿como desea pagarla? \nA)Efectivo\nB)Transferencia\nC)Debito")
// if (rtaPago.toUpperCase() === "A") {
//     alert("Se coordina con la inmobiliaria un punto de encuentro");
// } else if (rtaPago.toUpperCase() === "B") {
//     alert("El CBU es 820000003045530");
// } else if (rtaPago.toUpperCase() === "C") {
//     alert("Te pido los datos de la tarjeta");
// }

/* const propiedad1 = new Propiedad("1000m2", "256m2", "El Remanso");
const propiedad2 = new Propiedad("1500m2", "180m2", "Parque Jularó");
const propiedad3 = new Propiedad("900m2", "200m2", "Parque Exaltación");

let rtaPago = prompt("Que barrio le interesa \nA)El Remanso\nB)Parque Jularo\nC)Parque Exaltacion")
if (rtaPago.toUpperCase() === "A") {
    console.log(propiedad1.seleccion());
} else if (rtaPago.toUpperCase() === "B") {
    console.log(propiedad2.seleccion());
} else if (rtaPago.toUpperCase() === "C") {
    console.log(propiedad3.seleccion());
} */

//ARRAY
/* const array = ["matias", "soto", "rebizo"];
//APARECEN SEPARADOS DE DISTINTAS MANERAS
console.log(array.join("-"));
//SE AGREGA UN VALOR
array.push("654");
//CONCATENAR, PRIMERO CREO OTRO
const array1 = ["soltero", "empleado"];
const array2 = array.concat(array1);
console.log(array2) */

// OBJETO CON ARRAY

/* class propiedad {
    constructor(terreno, supcubierta, barrio) {
        this.terreno = terreno;
        this.supcubierta = supcubierta;
        this.barrio = barrio.toUpperCase();
        this.reservado = false;
    }
    seleccion() {
        console.log("En esa zona disponemos de una propiedad que cuenta con " + this.supcubierta + " cubiertos en un lote de " + this.terreno)
    }
}
const reservas = []

let enVenta = new propiedad("1000m2", 256, "El Remanso")
reservas.push(enVenta);
reservas.push(new propiedad("1500m2", 180, "Parque Jularó"))
reservas.push(new propiedad("900m2", 200, "Parque Exaltación"))

const casaGrande = propiedad.filter(() => this.supcubierta < 200);
console.log(casaGrande); */

/* const buscarRemanso = propiedad.find(propiedad => propiedad.barrio === "El Remanso");
    console.log(buscarRemanso);
    const baratos = propiedad.filter(propiedad => propiedad.precio < 300000);
    console.log(baratos); */

///////////ARRAYS

let nombre = localStorage.getItem("nombre")
if (nombre === null) {
    nombre = prompt("ingrese nombre de usuario")
    localStorage.setItem("nombre", nombre)
}

let bienvenido = document.getElementById("wellcome")
bienvenido.innerHTML = "Bienvenido " + nombre;

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
}