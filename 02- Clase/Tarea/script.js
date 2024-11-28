/* # Ejercicios Básicos de JavaScript

## Variables y Constantes
1. Declara una variable llamada `nombre` y asígnale tu nombre.
2. Declara una constante llamada `PI` y asígnale el valor de π (pi).

*/

/* let nombre = "Paula";
const PI = 3.141516; */


/*

## Booleanos
3. Declara una variable llamada `esMayorDeEdad` y asígnale `true` si tienes más de 18 años, o `false` si tienes 18 años o menos.
*/

/* let esMayorDeEdad = true; */


/*
## Prompt, Alert y Console.log
4. Pide al usuario que ingrese su edad utilizando `prompt` y almacena el valor en una variable llamada `edadUsuario`.
5. Muestra un mensaje de alerta que diga "¡Hola!".
6. Imprime en la consola el mensaje "La edad ingresada es: [valor de edadUsuario]".
*/
/* let edadUsuario = parseInt(prompt("cual es tu edad?"));
alert("hola")
console.log("La edad ingresada es: " + edadUsuario);
 */

/*
## Control de Flujo con if y if else
7. Utilizando un `if`, verifica si un número ingresado por el usuario es positivo, 
negativo o cero, e imprime un mensaje correspondiente.
8. Utilizando un `if else`, verifica si un número ingresado por el usuario es par o impar, 
e imprime un mensaje correspondiente.
9. Utilizando un `if else`, verifica si un número ingresado por el usuario es mayor que 100, 
menor que 100 o igual a 100, e imprime un mensaje correspondiente.
*/
/* let ingresarNumero = 100;

if(ingresarNumero> 0){
    console.log("Ingresaste un numero positivo");
} else if (ingresarNumero ===0 ){
console.log("ingresaste el numero 0")
} else if (ingresarNumero %2 === 2){
    console.log("Escribiste un numero par")
} else if (ingresarNumero % 2 !== 0){
    console.log("ingresaste un numero impar")
} else if (ingresarNumero > 100){
    console.log("ingresaste un numero mayor que 100")
} else if (ingresarNumero < 100){
    console.log("ingresaste un numero menor que 100")
} else if (ingresarNumero === 100){
    console.log("ingresaste el numero 100")
}else {
    console.log("Ingrese un numero")
} */


/*
## Operadores Lógicos

10. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es divisible tanto por 2 como por 3.
11. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 0 y menor que 100.
12. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 10 o menor que -10.
*/

/* let ingresarNumero = 18;

if(ingresarNumero %2 ==0 && ingresarNumero %3==0){
    console.log("el numero es divisible por 2 y 3")
} else {
    console.log("el numero no es divisible por ambos numeros")
} */

/* let ingresarNumero = 18;

let mensaje = (ingresarNumero % 2 === 0 && ingresarNumero % 3 === 0) 
    ? "El número es divisible por 2 y 3" 
    : "El número no es divisible por ambos números";

console.log(mensaje); */

/* let numero = 110;

let mensajeIngresado = ( numero > 0 && numero <100)
? "el numero es mayor a cero y menor que cien"
: "El numero es menor a cero o mayor a cien";

console.log(mensajeIngresado)
 */

/* let numero = 2

let mensaje = ( numero > -10 || numero < 10)
? "el numero ingresado cumple con una de las dos condiciones"
:" el numero ingresado no cumple con ninguna condicion"

console.log(mensaje) */


/*
## Ejercicios Adicionales

13. Pide al usuario que ingrese un número utilizando `prompt`, 
luego verifica si es un número primo e imprime un mensaje correspondiente.
*/


/*
14. Crea una variable llamada `hora` y asígnale un valor numérico que represente una hora del día. 
Luego, utilizando un `if else`, imprime un mensaje que indique si es mañana, tarde o noche.
15. Pide al usuario que ingrese dos números utilizando `prompt`, luego verifica si el primero es divisible por el segundo e imprime un mensaje correspondiente.
16. Crea una variable llamada `nombreUsuario` y asígnale un nombre. Luego, verifica si el nombre tiene más de 6 caracteres e imprime un mensaje correspondiente.
17. Utilizando un `if else`, verifica si un año ingresado por el usuario es bisiesto o no, e imprime un mensaje correspondiente.
18. Pide al usuario que ingrese su nombre utilizando `prompt`, luego verifica si comienza con la letra "A" o "a" e imprime un mensaje correspondiente.
19. Declara una variable llamada `temperatura` y asígnale un valor numérico que represente la temperatura actual. Luego, utilizando un `if`, imprime un mensaje que indique si hace frío, templado o caliente.
20. Pide al usuario que ingrese tres números utilizando `prompt`, luego verifica si la suma de los dos primeros números es igual al tercer número e imprime un mensaje correspondiente.


 */
