/* # Ejercicios de Bucles en JavaScript

#### For Loop

1. Imprimir los números del 1 al 10 usando un bucle `for`.
2. Sumar los números del 1 al 100 y mostrar el resultado usando un bucle `for`.
3. Imprimir los números pares del 1 al 20 usando un bucle `for`.
4. Crear un bucle `for` que pida al usuario 5 números y calcule su suma.
5. Imprimir los elementos de un array usando un bucle `for`.
*/

//1
/* for (let i = 0; i < 10; i++) {
    console.log("Estoy ejecutando " +(i+1));
} */
//2
/* let suma = 0;
for (let i =1; i<=100; i++){
    console.log(suma=suma +i)
} */
//3

/* for (let i = 0; i<20 ; i++){
    if(i % 2 === 0){
        console.log("imprimiendo numeros pares "+ i)
    }
}
 */
//4
/* suma =0;
for (let i =0 ; i<5 ; i++){
    let numeros= parseInt(prompt("Elegi un numero"))
    suma = suma + numeros;
    console.log(suma)
} */

//5
/* let listaCompras = [
    "Zanahoria",
    "Batata",
    "Espinaca",
    "Champis",
    "Rucula",
    "Papas"
]

for( let i = 0; i<listaCompras.length ; i++){
    console.log(listaCompras[i])
} */

/*
#### While Loop

6. Imprimir los números del 1 al 10 usando un bucle `while`.
7. Sumar los números del 1 al 50 y mostrar el resultado usando un bucle `while`.
8. Imprimir los números impares del 1 al 20 usando un bucle `while`.
9. Crear un bucle `while` que pida al usuario números hasta que introduzca un número negativo.
10. Contar el número de veces que el usuario introduce "hola" usando un bucle `while`.
*/

//6
/* let i = 1;

while ( i <=10){
    console.log (i)
    i++;
} */

//7

/* let i = 1;
let sumar =0;
while (i <=50){
  sumar= i + sumar;
    i++
    console.log (sumar)
} */

//8
/* let i= 1;

while (i<=20){
console.log(i);
i= i+2;
} */

//9
/* let numero = 0;

while (numero >= 0){
    numero = parseInt(prompt("Ingresa un número (introduce un número negativo para salir):"));
if (numero >0){
    console.log("seguis en el bucle")
}else{
    console.log("saliste del bucle")
}

} */

//10
/* let texto = "hola";
let cantidad = 0;

while (texto == "hola") {
  texto = prompt("deci hola o chau").toLocaleLowerCase();
  if (texto == "hola") {
    cantidad++;
  } else {
    console.log("usted dijo la palabra 'hola' " + cantidad + " de veces");
  }
} */

/*
#### Do...While Loop

11. Imprimir los números del 1 al 10 usando un bucle `do...while`.
12. Sumar los números del 1 al 30 y mostrar el resultado usando un bucle `do...while`.
13. Imprimir los múltiplos de 3 del 1 al 30 usando un bucle `do...while`.
14. Crear un bucle `do...while` que pida al usuario números hasta que introduzca el número 0.
15. Contar el número de intentos hasta que el usuario adivine un número secreto usando un bucle `do...while`.
*/

//11

/* let i = 0;
do {
  i++;
  console.log(i);
} while (i < 10);
 */

//12
/* let numero = 0;
let sumar = 0;

do {
  numero++;
  sumar = sumar + numero;
  console.log(sumar);
} while (numero < 30);
 */

//13
/* let numero = 0;
do {
  numero++;
  if (numero % 3 === 0) {
    console.log("El numero " + numero + " multiplo de 3");
  }
} while (numero < 30); */

//14
/* let pedir;
do {
  pedir = parseInt(prompt("elegi un numero. Salis con 0"));
} while (pedir !== 0);
 */

//15
/* let palabraSecreta = "secreto";
let palabra = "";
let sumar = 0;

do {
  palabra = prompt("Deci una palabra");
  if (palabra !== palabraSecreta) {
    sumar++;
  }
} while (palabra !== palabraSecreta);
console.log("Se intento salir " + sumar + " veces"); */

/*
### Sentencias Break y Continue

#### Break

16. Usar un bucle `for` para encontrar el primer número mayor a 50 en un array y salir del bucle.
17. Usar un bucle `while` para encontrar el primer número impar mayor a 10 y salir del bucle.
18. Crear un bucle `do...while` que pida números al usuario y salga cuando el usuario introduzca un número negativo.
19. Imprimir los números del 1 al 100, pero detenerse si el número es divisible por 37.
20. Usar un bucle `for` para imprimir los números del 1 al 20, pero detenerse si se encuentra el número 13.
*/

//16
//forma convencional
/* 
const numerosArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < numerosArray.length; i++) {
  if (numerosArray[i] > 50) {
    console.log("el primer numero mayor a 50 es " + numerosArray[i]);
    break;
  }
} */
//forma con FOR OF
/* for (let numero of numerosArray) {
  if (numero > 50) {
    console.log("FOR OF: el primer numero mayor a 50 es " + numero);
    break;
  }
} */

//17 Usar un bucle `while` para encontrar el primer número impar mayor a 10 y salir del bucle.
/* let i = 11;

while (i <= 20) {
  if (i % 2 !== 0) {
    console.log("El primer numero impar despues de 10 es " + i);
    break;
  }
  i++;
} */

//18 Crear un bucle `do...while` que pida números al usuario y salga cuando el usuario introduzca un número negativo.
/* let pedir;
do {
  pedir = parseInt(prompt("elegi un numero"));
} while (pedir >= 0);
 */

//19. Imprimir los números del 1 al 100, pero detenerse si el número es divisible por 37.

/* let numeros = 1;

while (numeros < 100) {
  if (numeros % 37 === 0) {
    console.log("El numero " + numeros + " es divisible por 37");
    break;
  }
  numeros++;
} */

//20 Usar un bucle `for` para imprimir los números del 1 al 20, pero detenerse si se encuentra el número 13.

/* for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("Llegaste al numero 13, se detiene el bucle");
    break;
  }
  console.log(i);
} */

/*
#### Continue

21. Usar un bucle `for` para imprimir los números del 1 al 20, omitiendo los múltiplos de 5.
22. Usar un bucle `while` para imprimir los números del 1 al 15, omitiendo los múltiplos de 3.
23. Crear un bucle `do...while` que pida al usuario números y omita los números pares.
24. Usar un bucle `for` para imprimir los números del 1 al 10, omitiendo el número 7.
25. Crear un bucle `while` que imprima los números del 1 al 20, omitiendo los números impares.
*/

//21 Usar un bucle `for` para imprimir los números del 1 al 20, omitiendo los múltiplos de 5.

/* for (let i = 0; i <= 20; i++) {
  if (i % 5 !== 0) {
    console.log("El numero " + i);
  }
} */

/*
### Estructura Switch

26. Pedir al usuario un número del 1 al 7 e imprimir el día de la semana correspondiente.
*/

/* let pedirNumero;

do {
  pedirNumero = parseInt(prompt("elegi un numero del 1 al 7"));
  if (pedirNumero >= 1 && pedirNumero <= 7) {
    switch (pedirNumero) {
      case 1:
        console.log("Lunes");
        break;
      case 2:
        console.log("Martes");
        break;
      case 3:
        console.log("Miercoles");
        break;
      case 4:
        console.log("Jueves");
        break;
      case 5:
        console.log("Viernes");
        break;
      case 6:
        console.log("Sábado");
        break;
      case 7:
        console.log("Domingo");
        break;
    }
    break;
  } else {
    console.log("Número inválido. Por favor, ingresá un número del 1 al 7.");
  }
} while (true); */

/*
27. Pedir al usuario una calificación (A, B, C, D, F) e imprimir un mensaje adecuado.
*/
/* let calificacion;

do {
  calificacion = prompt(
    "Cual es la calificacion del alumno? (A-B-C-D-F)"
  ).toUpperCase();
  if (["A", "B", "C", "D", "F"].includes(calificacion)) {
    switch (calificacion) {
      case "A":
        console.log("Excelente");
        break;
      case "B":
        console.log("Muy Bien");
        break;
      case "C":
        console.log("Aprobado");
        break;
      case "D":
        console.log("Condicional");
        break;
      case "F":
        console.log("Desaprobado :(");
        break;
    }
    break;
  } else {
    alert("No seleccionó una letra valida. Por favor seleccionar A-B-C-D-F");
  }
} while (true); */

/*
28. Crear un menú simple usando `switch` que permita al usuario elegir una opción entre 1 y 3 e imprimir un mensaje adecuado.
*/
/* let menuSimple;

do {
  menuSimple = parseInt(prompt("Elegi tu menu 1-2-3"));
  if (menuSimple >= 1 && menuSimple <= 3) {
    switch (menuSimple) {
      case 1:
        console.log("Eligio el pollo con papas, excelente eleccion");
        break;
      case 2:
        console.log("Eligió el pure con milanesas, muy buena eleccion");
        break;
      case 3:
        console.log("Eligio el guiso de mondongo, esta seguro de su eleccion?");
        break;
    }
    break;
  } else {
    alert("Por favor elija uno de los menues del 1 al 3");
  }
} while (true); */

/*
30. Pedir al usuario que introduzca un carácter y determinar si es una vocal o una consonante.
*/

/* let letra = prompt("elegi una letra").toUpperCase();
if (letra.length === 1 && letra.match(/[A-Z]/))
  if (["A", "E", "I", "O", "U"].includes(letra)) {
    alert("Tu letra " + letra + " es una vocal");
  } else {
    alert("Tu letra " + letra + " es una consonante");
  }
else {
  alert("Por favor, ingresá **solo una letra**.");
} */

/*
### Combinando Conceptos

31. Pedir al usuario 5 números y calcular su suma usando un bucle `for` y `prompt`.
*/

/* let number;
let addNumber=0;

for ( let i=0; i <5 ; i++){
  number = parseInt(prompt("Choose a number"));
  addNumber = number + addNumber
}
console.log("The add of all the prompts are " + addNumber ); */

/*
32. Crear un bucle `while` que pida al usuario una palabra y termine cuando el usuario introduzca "salir".
*/
/* let word ;

let password ="exit"

while (word != password){
  word = prompt("Write a word");
console.log("Su palabra es " + word);
}
console.log("Salio de la ejecucion") */

/*
33. Crear un bucle `for` que imprima los números del 1 al 50, pero salte los múltiplos de 4 usando `continue`.
*/
/* for (let i =1; i<=50; i++){
  if (i %4 ===0){
    console.log(i+ " es numero multiplo de 4")
  }else{
    console.log(i)
  }
} */


/*
34. Crear un bucle `while` que pida al usuario números y termine si el número introducido es mayor a 100.
*/
/* i=0;
while ( i != 100){
  i = parseInt(prompt("deci un numero"))
  if(i != 100){
    console.log(i + " No es la respuesta correcta")

  }else{
    console.log (i+ " Es la respuesta correcta y salio del bucle")

  }
} */


/*
35. Pedir al usuario un número del 1 al 12 y usar `switch` para imprimir el nombre del mes correspondiente.
*/
/* 
let number = parseInt(prompt("Choose a number from 1 to 12"));

while (number < 1 || number > 12 || isNaN(number)) {  // Mientras el número no esté entre 1 y 12
  number = parseInt(prompt("Choose a number from 1 to 12"));
  console.log("This is not a possible number. Choose from 1 to 12");
}
switch(number) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
}
 */




/*
### Ejercicios Adicionales

36. Crear un bucle `for` que imprima los números del 1 al 10 en orden inverso.
*/
/* for( let i = 10; i >=1; i--){
  console.log(i)
} */


/*
37. Usar un bucle `while` para imprimir los números del 10 al 1.
*/
/* let i= 11;
while(i >1){
  i--;
console.log (i)
} */

/*
38. Crear un bucle `do...while` que imprima los números del 5 al 15.
*/
/* i=4
do {
i++
console.log (i)
}while (i<15) */


/*
39. Usar un bucle `for` para imprimir los elementos de un array en orden inverso.
*/
/* const miArray=["banana","manzana","pera"]

for(let i= miArray.length -1; i>miArray.length; i--){
  console.log(miArray[i])
} */


/*
40. Crear un bucle `while` que imprima los números del 1 al 100, pero termine si el número es divisible por 25.
*/
/* let i=1;
while(i<100){
  if(i%25===0){
  
    console.log(i + " es un numero divisible por 25")
    break
  }else{
    i++;
    console.log(i)
  }
} */


/*

### Combinando Bucles y Switch

41. Crear un bucle `for` que pida al usuario un número del 1 al 5 y use `switch` para imprimir un mensaje.
*/

/* for( let i =0; i<1; i++){
  let numero;
  do {
    numero = parseInt(prompt("Elige un número del 1 al 5:"), 10);
  } while (isNaN(numero) || numero < 1 || numero > 5);

  switch(numero){
  case 1: console.log("entraste al caso 1")
  break;
  case 2: console.log("entraste al caso 2")
  break;
  case 3: console.log("entraste al caso 3")
  break
  case 4: console.log("entraste al caso 4")
  break
  case 5: console.log("entraste al caso 5")
  break;
}
} */

/*
42. Crear un bucle `while` que pida al usuario un número del 1 al 7 y use `switch` para imprimir el día de la semana.
*/

/* let pedirNumero =parseInt(prompt("Elegi un numero del 1 al 7"))
while ( pedirNumero > 7 || pedirNumero<=0 ){
pedirNumero =parseInt(prompt("Elegi un numero del 1 al 7"))

}
switch (pedirNumero){
  case 1: console.log("entraste al caso 1")
  break;
  case 2: alert("entraste al caso 2")
  break;
  case 3: alert("entraste al caso 3")
  break
  case 4: alert("entraste al caso 4")
  break
  case 5: alert("entraste al caso 5")
  break;
  case 6: alert("entraste al caso 6")
  break;
  case 7: alert("entraste al caso 7")
  break;
} */

/*
43. Usar un bucle `do...while` para pedir al usuario una letra y usar `switch` para determinar si es vocal o consonante.
*/

/* let letra;
do{
  letra = prompt("Elegi una letra del abecedario")
}
while(!isNaN(letra));

switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
      alert("Es una vocal");
      break;

  default:
      alert("Es una consonante o un carácter inválido");
      break;
} */
/*
44. Crear un bucle `for` que imprima los números del 1 al 20 y use `switch` para imprimir un mensaje si el número es divisible por 4.
*/

/* 
for (let numero = 1; numero <=20; numero ++){
  switch (numero % 4){
    case 0 :
      console.log(numero + " es divisible por 4")
      break;
    default:
      console.log( numero + " no es divisible por 4")
      break;
  }
} */



/*
45. Crear un bucle `while` que pida al usuario una calificación (A, B, C, D, F) y use `switch` para imprimir un mensaje adecuado.
*/

/* let calificacion;

while (true) {
  calificacion = prompt("Introduce una calificación (A, B, C, D, F):").toUpperCase(); // Aseguramos que la entrada esté en mayúsculas
  if (["A", "B", "C", "D", "F"].includes(calificacion)) {
    break; // Salimos del bucle si la calificación es válida
  }
  alert("Por favor, introduce una calificación válida (A, B, C, D, F).");
}


switch (calificacion){
  case "A": console.log("Excelente")
  break;
  case "B": alert("Muy bien")
  break;
  case "C": alert("Bien")
  break
  case "D": alert("Regular")
  break
  case "F": alert("Desaprobaste")
  break;
  default:
    alert("Debes introducir una calificacion existente")
} */
/*
### Ejercicios de Aplicación

46. Crear un bucle `for` que imprima los números del 1 al 100, pero use `continue` para saltar los números múltiplos de 10.
*/
/* for ( let i = 1 ; i<=100 ; i++){
  if(i%10===0){
    continue;
  }
console.log(i)
} */


/*
47. Crear un bucle `while` que pida al usuario números y termine si introduce un número primo.
*/

/*
48. Crear un bucle `do...while` que pida al usuario su edad y use `switch` para imprimir un mensaje según la década.
49. Usar un bucle `for` para imprimir los números del 1 al 20, pero termine si el número es un cuadrado perfecto usando `break`.
50. Crear un bucle `while` que pida al usuario un día de la semana (1-7) y use `switch` para imprimir un mensaje, terminando si el usuario introduce un número mayor a 7. */
