/* # Ejercicios Avanzados de JavaScript con Objetos y Clases

## Objetos y Obtener Valores

1. Crea un objeto llamado `persona` con las propiedades `nombre`, `edad` y `ciudad`. Imprime en la consola el nombre de la persona.
2. Agrega una propiedad `telefono` al objeto `persona` y asigna un número de teléfono. Luego, imprime en la consola el teléfono.
3. Crea un objeto llamado `coche` con las propiedades `marca`, `modelo` y `año`. Imprime en la consola el modelo del coche.
4. Agrega una propiedad `color` al objeto `coche` y asigna un color. Luego, imprime en la consola el color.
*/
const persona = {
    nombre: "Paula",
    edad: 31,
    ciudad: "Buenos Aires"
}
console.log(persona.nombre);

persona.telefono= 1123568978;

console.log("El telefono de "+ persona.nombre + " es "+ persona.telefono)

const coche = {
    marca: "Nissan",
    modelo: "turbo 4",
    ano: 2007
}
console.log("El auto "+coche.marca+" modelo "+coche.modelo + " es del año "+ coche.ano)

coche.color= "rojo";
console.log ("El auto "+ coche.marca + " es de color "+coche.color) 

/*
## Objetos Constructores y Constructor y New

5. Crea un constructor llamado `Producto` con las propiedades `nombre`, `precio` y `cantidad`. Crea un objeto nuevo utilizando este constructor.
6. Crea un constructor llamado `Persona` con las propiedades `nombre`, `edad` y `ciudad`. Crea un objeto nuevo utilizando este constructor.
7. Crea un constructor llamado `Libro` con las propiedades `titulo`, `autor` y `año`. Crea un objeto nuevo utilizando este constructor.
*/

function Producto (nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}
const aceite = new Producto ("aceite", 1500, 20)

function Persona (nombre, edad, ciudad){
    this.nomre = nombre;
    this.edad = edad;
    this.ciudad = ciudad
}

const paula = new Persona ("Paula", 31, "Buenos Aires")

function Libro (titulo, autor, ano){
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano ;
}

const dune = new Libro ("Dune", "Frank Herbert", 1965)

/*
## Uso de THIS

8. Crea un objeto llamado `rectangulo` con las propiedades `base` y `altura`. Agrega un método llamado `calcularArea` que calcule y devuelva el área del rectángulo.
9. Crea un objeto llamado `circulo` con la propiedad `radio`. Agrega un método llamado `calcularPerimetro` que calcule y devuelva el perímetro del círculo.
10. Crea un objeto llamado `estudiante` con las propiedades `nombre`, `edad` y `curso`. Agrega un método llamado `presentarse` que imprima en la consola una presentación del estudiante.
*/
const rectangulo = {
    base: 2,
    altura: 500,
    calcularArea: function(base, altura){
        return base * altura
    }
}
let respuestaRectangulo = rectangulo.calcularArea(rectangulo.base, rectangulo.altura);

console.log("El area del rectangulo es "+respuestaRectangulo)

const circulo = {
    radio: 5,
    calcularPerimetro: function(radio){
        return 2* Math.PI *radio
    }
}
let respuestaCirculo = circulo.calcularPerimetro(5)
console.log("El perimetro del circulo es "+respuestaCirculo)

const estudiante = {
    nombre: "Paula",
    edad: 31,
    curso: "JS FLEX",
    presentarse : function(){
        return "Hola mi nombre es "+ estudiante.nombre + " tengo " + estudiante.edad + " años y estoy en el curso de "+ estudiante.curso
    }
}
let mensajeEstudiante = estudiante.presentarse();
console.log(mensajeEstudiante)

/*
## Métodos y Operaciones con Objetos

11. Crea un objeto llamado `cuentaBancaria` con las propiedades `saldo` y `titular`. Agrega un método llamado `depositar` que reciba un monto y lo sume al saldo.
12. Agrega un método llamado `retirar` al objeto `cuentaBancaria` que reciba un monto y lo reste al saldo.
13. Crea un objeto llamado `agenda` que contenga un array de contactos. Agrega un método llamado `agregarContacto` que reciba un objeto de contacto y lo añada al array.
14. Agrega un método llamado `buscarContacto` al objeto `agenda` que reciba el nombre de un contacto y devuelva el objeto correspondiente.
*/

const cuentaBancaria = {
    saldo: 3000,
    titular: "Paula",
    depositar: function(monto){
        return cuentaBancaria.saldo + monto
    },
    retirar: function(monto){
        return cuentaBancaria.saldo - monto
    },
}

const agenda = {
    contactos: [
        "Paula",
        "Jimena",
        "Sofia",
        "Estela",
        "Beatriz"
    ],
    agregarContacto : function(nombre){
        return agenda.contactos.push(nombre)
    },
    buscarContacto: function(contacto){
        return agenda.contactos.find( item => item === contacto)
    }
}
agenda.agregarContacto("Elsa")
let busqueda= agenda.buscarContacto("Soledad")
console.log(agenda.contactos)
console.log ("El nombre buscado es "+ busqueda)


/*
## Operador IN y FOR...IN

15. Crea un objeto llamado `frutas` con las propiedades `manzana`, `pera` y `naranja`. 
Utiliza el operador `in` para verificar si la propiedad `manzana` existe en el objeto.
16. Utiliza un bucle `for...in` para iterar sobre las propiedades del objeto `frutas` e imprime en la consola el nombre de cada fruta.
*/
const frutas = {
    manzana: "roja",
    pera: "verde",
    naranja: "naranja"
}
if ("manzana" in frutas) {
    console.log("La propiedad 'manzana' existe en el objeto frutas.");
  } else {
    console.log("La propiedad 'manzana' no existe en el objeto frutas.");
  }

for (let fruta in frutas){
    console.log("La fruta es "+fruta)
}

/*
## Clases y Métodos

17. Crea una clase llamada `Rectangulo` con las propiedades `base` y `altura`. 
Agrega un método llamado `calcularArea` que calcule y devuelva el área del rectángulo.
18. Crea una clase llamada `Circulo` con la propiedad `radio`. 
Agrega un método llamado `calcularPerimetro` que calcule y devuelva el perímetro del círculo.
19. Crea una clase llamada `Empleado` con las propiedades `nombre`, `edad` y `cargo`. 
Agrega un método llamado `promocionar` que actualice el cargo del empleado.
*/
class Rectangulo {
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }
    calcularRectanguloArea(){
        return this.base * this.altura
    }
}
const Rectangulo1 = new Rectangulo (40, 100)
const Rectangulo2 = new Rectangulo (30, 200)

console.log( "El area del rectangulo 1 es "+Rectangulo1.calcularRectanguloArea())
console.log( "El area del rectangulo 2 es "+Rectangulo2.calcularRectanguloArea())

class Circulo {
    constructor(radio){
        this.radio = radio;
    }
    calcularPerimetroCirculo(){
        return 2 * Math.PI * this.radio
    }
}

const Circulo1 = new Circulo (5)
console.log("El perimetro del circulo 1 es de "+ Circulo1.calcularPerimetroCirculo())

class Empleada {
    constructor(nombre, edad, cargo){
        this.nombre = nombre;
        this.edad= edad;
        this.cargo =cargo;
    }
    promocionar(nuevoCargo){
        this.cargo=nuevoCargo
        return "La empleada "+ this.nombre + " ha sido promovida al cargo de " + this.cargo
    }
}
const empleada1 = new Empleada("Paula",31,"Analista funcional")
empleada1.promocionar("Project manager")
console.log(empleada1)


/*
## Constructor y New

20. Crea una clase llamada `Producto` con las propiedades `nombre`, `precio` y `cantidad`. Crea un objeto nuevo utilizando el operador `new` y la clase `Producto`.
21. Crea una clase llamada `Estudiante` con las propiedades `nombre`, `edad` y `curso`. Crea un objeto nuevo utilizando el operador `new` y la clase `Estudiante`.
22. Crea una clase llamada `Libro` con las propiedades `titulo`, `autor` y `año`. Crea un objeto nuevo utilizando el operador `new` y la clase `Libro`.
*/
class ProductoAlmacen {
    constructor(nombre, precio, cantidad){
        this.nombre= nombre,
        this.precio =precio,
        this.cantidad =cantidad
    }
}
const arvejas = new ProductoAlmacen ("arvejas",50,100)

class Estudiante {
    constructor(nombre,edad,curso){
        this.nombre=nombre,
        this.edad=edad,
        this.curso=curso
    }
}
const estudiante1= new Estudiante ("Juan",26,"Super economia para avanzados");

class LibroClase {
    constructor(titulo,autor,ano){
        this.titulo = titulo,
        this.autor = autor,
        this.ano= ano
    }
}
const libro1 = new LibroClase ("Alicia en el Pais de las maravillas", "Fulanito", 1976)
/*
## Métodos y Operaciones con Objetos

23. Agrega un método llamado `buscarContacto` a la clase `Agenda` que reciba el nombre de un contacto y devuelva el objeto correspondiente.
24. Crea una clase llamada `Vehiculo` con las propiedades `marca`, `modelo` y `año`. Agrega un método llamado `detalles` que imprima en la consola los detalles del vehículo.
25. Agrega un método llamado `acelerar` a la clase `Vehiculo` que imprima en la consola un mensaje indicando que el vehículo está acelerando.
26. Crea una clase llamada `Rectangulo` con las propiedades `base` y `altura`. Agrega un método llamado `calcularPerimetro` que calcule y devuelva el perímetro del rectángulo.
27. Crea una clase llamada `Triangulo` con las propiedades `lado1`, `lado2` y `lado3`. Agrega un método llamado `calcularArea` que calcule y devuelva el área del triángulo.
28. Agrega un método llamado `calcularPerimetro` a la clase `Triangulo` que calcule y devuelva el perímetro del triángulo.
*/
class AgendaPaula {
    constructor (){
        this.contactos = []
    }
    agregarContacto(nombre, telefono, direccion){
        const contacto = {nombre, telefono, direccion}
        this.contactos.push(contacto)
    }
    buscarContacto(nombre){
        const contacto = this.contactos.find(contacto => contacto.nombre === nombre)
        if (contacto){
            return "El contacto buscado es el siguiente "+ JSON.stringify(contacto)
        }else {
            return "Contacto no encontrado"
        }
    }
}
const agendaP= new AgendaPaula()
agendaP.agregarContacto("Juan", 12345678, "Argentino Juniors")
agendaP.agregarContacto("Kenia", 12345678, "KENIEDDADDD MIAW")

console.log(agendaP.buscarContacto("Juan"))

/*
## Operador IN y FOR...IN

29. Crea un objeto llamado `computadora` con las propiedades `marca`, `modelo` y `procesador`. Utiliza el operador `in` para verificar si la propiedad `procesador` existe en el objeto.
30. Utiliza un bucle `for...in` para iterar sobre las propiedades del objeto `computadora` e imprime en la consola el nombre de cada propiedad y su valor.

## Clases y Métodos

31. Crea una clase llamada `Circulo` con la propiedad `radio`. Agrega un método llamado `calcularArea` que calcule y devuelva el área del círculo.
32. Crea una clase llamada `TrianguloEquilatero` con la propiedad `lado`. Agrega un método llamado `calcularPerimetro` que calcule y devuel */