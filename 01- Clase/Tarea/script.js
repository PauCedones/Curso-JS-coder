/* 
// 1. Consola (Console.log, console.error, etc):
// Imprime "Hola, mundo" en la consola.
console.log("hola mundo")
// Imprime tu nombre en la consola.
console.log("Paula")
// Muestra un mensaje de error en la consola.
console.error("Mensaje de error")
// Imprime el resultado de 5 + 3 en la consola.
console.log(5+3)
// Imprime el resultado de 10 - 7 en la consola.
console.log(10-7)
// Declara una variable nombre con tu nombre y muéstralo en la consola.
let nombre = "Paula";
console.log(nombre)
// Declara una variable edad con tu edad y muéstralo en la consola.
let edad = 31;
console.log(edad)
// Imprime el resultado de 8 * 5 en la consola.
console.log(8*5)
// Imprime el resultado de 20 / 4 en la consola.
console.log(20/4)
// Declara dos variables a y b con valores numéricos y muestra su suma en la consola.
let a = 1;
let b = 2
console.log(a + b)
// Imprime el resultado de la concatenación de dos cadenas de texto.
console.log("Mi nombre es "+nombre+" y tengo "+edad+" años") */



//2. Prompt:
//Pide al usuario que ingrese su nombre y muestra su nombre en la consola.
/* let pedirPromp = prompt("Cual es tu nombre?")
console.log(pedirPromp) */

//Solicita al usuario que ingrese su edad y luego muestra un mensaje en la consola con esa edad.
/* let pedirEdad =prompt("cual es tu edad?")
console.log(pedirEdad + " años") */

//Pide al usuario que ingrese dos números y muestra la suma de estos números en la consola.
/* let pedirNumeroA = prompt("elegi un numero")
let pedirNumeroB = prompt("elegi un numero")

pedirNumeroA = parseInt(pedirNumeroA)
pedirNumeroB = parseInt(pedirNumeroB)

console.log(pedirNumeroA+pedirNumeroB)
 */

//Solicita al usuario que ingrese su color favorito y muestra un mensaje con ese color en la consola.
/* let color = prompt ("cual es tu color favorito?")

console.log("Tu color favorito es " + color) */

//Pide al usuario que ingrese una frase y muestra esa frase en la consola.
/* let frase = prompt("Contanos tu frase favorita")
console.log(frase) */



//3. Alert:
//Muestra un mensaje de bienvenida usando alert.
/* alert("Bienvenido") */

//Pregunta al usuario su comida favorita y luego muestra un mensaje de alerta con esa comida.
/* let comida = prompt("cual es tu morfi favorito?")
alert("Tu comida favorita es "+ comida) */


//4. Combinación de Consola, Prompt y Alert

//Pide al usuario que ingrese su nombre y su edad utilizando un prompt.
/* let pedirNombre = prompt("cual es tu nombre?")
let pedirEdad = prompt("cual es tu edad?") */


//Saluda al usuario utilizando un mensaje de alerta que contenga su nombre y su edad.
/* alert("Buenos dias " + pedirNombre + " tu edad es "+ pedirEdad + " años") */

//Calcula el año de nacimiento del usuario utilizando su edad ingresada y muestra este año en la consola.
/* let calcularAñoNacimiento = 2024 - pedirEdad
console.log("Naciste en el año " + calcularAñoNacimiento) */

//Muestra un mensaje de alerta que indique si el usuario es menor de edad o mayor de edad, dependiendo de su edad ingresada.
/* if (pedirEdad >= 18) {
    alert("Sos mayor de edad, podes ir preso")
}else {
        alert("Sos menor de edad, segui creciendo para ir preso")
    } */


//Pide al usuario que ingrese dos números utilizando prompt y muestra la suma de estos números en una alerta.
/* let numberA = parseInt(prompt("Ingrese un numero"));
let numberB = parseInt(prompt("Ingrese un numero"));

alert(numberA+numberB); */

//Pide al usuario que ingrese su mes de nacimiento y muestra su signo zodiacal en la consola.
/* let personA = prompt("Cual es tu mes de nacimiento?");

switch (personA) {
  case "Enero":
    console.log("Sos de Acuario");
    break;
  case "Febrero":
    console.log("Sos de Piscis.");
    break;
  case "Marzo":
    console.log("Sos de Aries.");
    break;
    case "Abril":
        console.log("Sos de Tauro.");
        break;
  default:
    console.log("Ingresa bien tu mes de nacimiento");
} */

//Solicita al usuario que ingrese un número y muestra un mensaje de alerta indicando si el número es par o impar.
let askNumber = parseInt(prompt("Ingresa un numero"))

/* if(askNumber){
    if (askNumber % 2 === 0) {
        alert("El número " + askNumber + " es par.");
    } else {
        alert("El número " + askNumber + " es impar.");
    }
} */
