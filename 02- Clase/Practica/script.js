/* 
1. Pedir número mediante prompt y sumarle otro número en cada repetición,
realizando una salida por cada resultado

2. Pedir un texto mediante prompt, concatenar un valor en cada repetición, 
realizando una salida por cada resultado, hasta que se ingresa “ESC”.

3. Pedir un número por prompt, 
repetir la salida del mensaje “Hola” la cantidad de veces 
*/

//1

/* let askNumber = parseInt(prompt("Dame un numero"));

for (let i = 0; i < 5; i++) {
    let sumar =askNumber + i;
    console.log(sumar);
} */

//2

/* let pedirTexto = prompt("Decí algo"); // Solicita un texto inicial
let textoConcatenado =""; // Variable para almacenar el texto acumulado

while (pedirTexto !== "ESC") { // Sigue mientras no se ingrese "ESC"
    textoConcatenado = textoConcatenado + pedirTexto + " "; // Concatena el texto ingresado
    console.log(textoConcatenado); // Muestra el texto acumulado
    pedirTexto = prompt("Decí algo (escribí 'ESC' para salir)"); // Pide otro texto
}

console.log("Saliste del programa."); */


//3

/* let askNumber = parseInt(prompt("Ingresa un numero")); */

for (let askNumber = 0; askNumber < 5; askNumber++) {
    console.log("Estoy ejecutandome " +(askNumber+1));
}