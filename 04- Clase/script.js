/* # Ejercicios Básicos de JavaScript con Funciones

## Variables Locales y Globales

1. Declara una variable global llamada `mensaje` y asígnale un mensaje.
*/
let mensaje ="prueba";

/*
2. Crea una función llamada `saludar` que imprima en la consola el valor de la variable `mensaje`.
*/
function saludar (){
    console.log(mensaje)
};

/*
3. Llama a la función `saludar` para que imprima el mensaje.
*/

saludar();

/*
## Funciones

4. Crea una función llamada `sumar` que tome dos números como parámetros y devuelva la suma de ellos.
*/

function sumar (a,b){
return a+b;
}


/*
5. Llama a la función `sumar` con dos números como argumentos e imprime el resultado en la consola.
*/
let resultado = sumar (5,6)

console.log("El resultado de la suma es " + resultado)

/*
## Funciones con Parámetros

6. Crea una función llamada `multiplicar` que tome tres números como parámetros y devuelva el resultado de multiplicarlos.
*/
function multiplicar (a,b,c){
    return a*b*c
}

/*
7. Llama a la función `multiplicar` con tres números como argumentos e imprime el resultado en la consola.
*/
let resultadoMultiplicar = multiplicar (2,4,6)
console.log("El resultado de la multiplicación es "+resultadoMultiplicar);

/*
## Funciones Anónimas

8. Declara una variable llamada `cuadrado` y asígnale una función anónima que tome un número como parámetro y devuelva el cuadrado de ese número.
*/
const cuadrado = function (a){
    return a*a
}

/*
9. Utiliza la función anónima almacenada en la variable `cuadrado` para calcular el cuadrado de un número e imprime el resultado en la consola.
*/
let resultadoCuadrado = cuadrado(5)
console.log("El resultado del cuadrado es " + resultadoCuadrado)

/*
## Funciones Flecha

10. Declara una variable llamada `esPar` y asígnale una función flecha que tome un número como parámetro y devuelva `true` si es par y `false` si es impar.
*/
const esPar = (a) => a % 2 === 0

/*
11. Utiliza la función flecha almacenada en la variable `esPar` para determinar si un número ingresado por el usuario es par o impar e imprime el resultado en la consola.
*/
let resultadoEsPar = esPar(20)
console.log("¿el numero es par? " + resultadoEsPar)

/*
## Variables Locales y Globales

12. Dentro de una función, declara una variable local llamada `contador` y asígnale un valor.
*/
function prueba (){
    let contador ="variable declarada dentro de la funcion prueba"
}

/*
13. Intenta acceder a la variable `contador` desde fuera de la función y observa el resultado.
*/
// contador;

/*
## Funciones

14. Crea una función llamada `saludarNombre` que tome un nombre como parámetro y devuelva un mensaje de saludo con ese nombre.
*/
function saludar (nombre){
    return "Bienvenida "+ nombre
}


/*
15. Llama a la función `saludarNombre` con tu nombre como argumento e imprime el mensaje en la consola.
*/
let saludarNombre = saludar("Paula")
console.log(saludarNombre)
/*
## Funciones con Parámetros

16. Crea una función llamada `calcularAreaRectangulo` que tome dos parámetros (base y altura) y devuelva el área del rectángulo.
*/

function calcularAreaRectangulo (base, altura){
    return base * altura
}

/*
17. Llama a la función `calcularAreaRectangulo` con valores de base y altura proporcionados por el usuario e imprime el resultado en la consola.
*/
/* let preguntarBase = parseInt(prompt("Cual es la base?"))
let preguntarAltura = parseInt(prompt("Cual es la Altura?"))

let resultadoArea = calcularAreaRectangulo(preguntarBase, preguntarAltura)
console.log ("El area de la base "+ preguntarBase +" y de la altura "+ preguntarAltura+" es "+ resultadoArea)  ; */

/*
## Funciones Anónimas

18. Crea una función anónima que tome dos números como parámetros y devuelva el mayor de los dos.
*/
const mayorNumero = function (a,b){
    if(a>b){
        return a
    } else{
        return b
    }
}

/*
19. Utiliza la función anónima creada para determinar el número más grande de dos números ingresados por el usuario e imprime el resultado en la consola.
*/
let resultadomMayorNumero = mayorNumero(40,5)
console.log("El numero mayor es "+resultadomMayorNumero)

/*
## Funciones Flecha

20. Declara una variable llamada `doble` y asígnale una función flecha que tome un número como parámetro y devuelva el doble de ese número.
*/

const dobleNumero = (numero) => {
    return numero *2
}

/*
21. Llama a la función flecha almacenada en la variable `doble` para calcular el doble de un número e imprime el resultado en la consola.
*/
let resultadoDoble = dobleNumero(40)
console.log("El doble del numero es "+resultadoDoble)
/*
# Ejercicios Básicos de JavaScript para Cálculos Geométricos

## Cálculo del Área de un Triángulo

22. Crea una función llamada `areaTriangulo` que tome la base y la altura de un triángulo como parámetros y devuelva el área del triángulo.
*/
function areaTriangulo (base, altura){
    return base * altura
}

/*
23. Llama a la función `areaTriangulo` con valores de base y altura proporcionados por el usuario e imprime el resultado en la consola.
*/
let resultadoAreaTriangulo = areaTriangulo(5,7)
console.log("El area del triangulo es "+resultadoAreaTriangulo)

/*
## Cálculo del Perímetro de un Cuadrado

24. Crea una función llamada `perimetroCuadrado` que tome el lado de un cuadrado como parámetro y devuelva el perímetro del cuadrado.
25. Llama a la función `perimetroCuadrado` con el valor del lado proporcionado por el usuario e imprime el resultado en la consola.
*/
function perimetroCuadraro (lado){
    return lado*4
}
let resultadoPerimetroCuadrado = perimetroCuadraro(4)
console.log("El perimetro del cuadrado es "+resultadoPerimetroCuadrado)

/*
## Cálculo del Área de un Círculo

26. Crea una función llamada `areaCirculo` que tome el radio de un círculo como parámetro y devuelva el área del círculo.
27. Llama a la función `areaCirculo` con el valor del radio proporcionado por el usuario e imprime el resultado en la consola.
*/
 function areaCirculo (radio){
    return Math.PI * Math.pow(radio, 2)
 }

 let resultadoAreaCirculo = areaCirculo (3)
 console.log ("El area del circulo es "+resultadoAreaCirculo)
/*
## Cálculo del Perímetro de un Rectángulo

28. Crea una función llamada `perimetroRectangulo` que tome la longitud y la anchura de un rectángulo como parámetros y devuelva el perímetro del rectángulo.
29. Llama a la función `perimetroRectangulo` con valores de longitud y anchura proporcionados por el usuario e imprime el resultado en la consola.
*/
function perimetroRectangulo (largo, alto){
    return (largo+alto)*2
}
let resultadoPerimetroRectangulo = perimetroRectangulo(40,2)
console.log("El perimetro del rectangulo es "+resultadoPerimetroRectangulo);

/*
## Cálculo del Área de un Trapecio

30. Crea una función llamada `areaTrapecio` que tome las bases y la altura de un trapecio como parámetros y devuelva el área del trapecio.
31. Llama a la función `areaTrapecio` con valores de las bases y la altura proporcionados por el usuario e imprime el resultado en la consola. */

function areaTrapecio (base1,base2, altura){
    return ((base1 + base2)* altura)/2
}
let resultadoTrapecio = areaTrapecio(5,10,4)
console.log ("El area del trapecio es "+ resultadoTrapecio)