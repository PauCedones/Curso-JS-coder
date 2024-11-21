//Configuración del Entorno y Primer Script en JavaScript
console.log("Hola Mundo");

//Actividad: Uso de Variables y Tipos de Datos
const nombre = "Paula";

let edad = 31;

let trabajo = "¿trabaja?"

let trabajar = true;

console.log(nombre, edad, trabajo, trabajar);

//Operaciones Matemáticas Básicas
let a = 2;

let b = 6;

let sumar = a + b;

let restar = a-b;

let multiplicar = a*b;

let dividir = b/a;

console.log(sumar, restar, multiplicar, dividir);

// Interacción con el Usuario
//1 Utiliza prompt para pedirle al usuario que ingrese su nombre.
//2. Usa alert para mostrar un mensaje de bienvenida personalizado que incluya el nombre ingresado.
//3. Usa confirm para preguntar al usuario si desea continuar; 
//según su respuesta, muestra un mensaje en la consola indicando si decidió continuar o no.

let nombrePromp = prompt("¿Cual es tu nombre?");

alert("Bienvenido "+ nombrePromp);

const decision = confirm("¿Deseas continuar con los cambios?");
console.log(decision ? nombrePromp +" aceptó la solicitud." : nombre +" no aceptó la solicitud.");

//Encuentra y Corrige el Error

let nombree = "Ana"; 

const edadd = 25; 

let mensaje = "Hola, " + nombree + "! Tienes " + edadd +" años."; 

console.log(mensaje);
