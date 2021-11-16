/* //pedir nombre en prompt
let nombreIngresado = prompt("Hola, cual es tu nombre?");
//crear mensaje y mostrar
alert("Hola " + nombreIngresado);
let pregunta1 = prompt("Contame " + nombreIngresado + ", tenes novio/a?")
if (pregunta1 == "si") {
    let pregunta2 = prompt("que suerte la tuya!, como es su nombre?");
    alert("que lindo nombre!")
} else if (pregunta1 == "no") {
    alert("Ya va a llegar!")
} else {
    alert("me parece que no contestate mi pregunta :(" + nombreIngresado)
} */

// EJERCICIO 2

/* let pregunta = prompt("elije un candidato: \n A)rojo \n B)verde \n C)azul ");
if (pregunta.toUpperCase() === "A") {
    alert("elegiste rojo");
} else if (pregunta.toUpperCase() === "B") {
    alert("elegiste verde");
} else if (pregunta.toUpperCase() === "C") {
    alert("elegiste azul");
} else {
    alert("opcion erronea");
} */

// EJERCICIO 3

// const altura = prompt("ingrese su altura");
// altura * altura;
// const peso = prompt("ingrese su peso")
// if (peso / altura < 16) {
//     alert("hospital afaerte")
// } else if (peso / altura < 17) {
//     alert("infrapeso")
// } else if (peso / altura < 18) {
//     alert("bajo peso")
// } else if (peso / altura < 25) {
//     alert("peso normal")
// } else if (peso / altura < 30) {
//     alert("sobrepeso")
// } else if (peso / altura < 35) {
//     alert("obesidad")
// } else if (peso / altura < 40) {
//     alert("remil obeso")
// }

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

//OBJETO

class Propiedad {
    constructor(terreno, supcubierta, barrio) {
        this.terreno = terreno;
        this.supcubierta = supcubierta;
        this.barrio = barrio;
    }
    seleccion() {
        console.log("En esa zona disponemos de una propiedad que cuenta con " + this.supcubierta + " cubiertos en un lote de " + this.terreno)
    }
}
const propiedad1 = new Propiedad("1000m2", "256m2", "El Remanso");
const propiedad2 = new Propiedad("1500m2", "180m2", "Parque Jularó");
const propiedad3 = new Propiedad("900m2", "200m2", "Parque Exaltación");

let rtaPago = prompt("Que barrio le interesa \nA)El Remanso\nB)Parque Jularo\nC)Parque Exaltacion")
if (rtaPago.toUpperCase() === "A") {
    console.log(propiedad1.seleccion());
} else if (rtaPago.toUpperCase() === "B") {
    console.log(propiedad2.seleccion());
} else if (rtaPago.toUpperCase() === "C") {
    console.log(propiedad3.seleccion());
}