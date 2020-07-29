/*
const cliente = {
    nombre: 'alejandra',
    tipo: 'premium'
}

nombre = 'PEPE';
apellido = 'PEPE';
//esta forma destruye los datos anteiores y los reemplaza con los correspondientes del objeto.
({nombre, tipo} = cliente);
    console.log(nombre);
    console.log(tipo);

const cliente ={
    tipo: 'Premium',
    nombre: 'Antonio',
    datos: {
        ubicacion: {
            ciudad: 'Jalisco',
            pais: 'Mexico'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 400
        }
    }
}
let { datos: {ubicacion } } = cliente;
console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);
let { datos: {cuenta } } = cliente;
console.log(cuenta);
console.log(cuenta.desde);
console.log(cuenta.saldo);

const clientee ={
    nombre: 'pedro'
}

//si el clientee no tiene los valores por default le asignamos unos al crear las variables en base al clientee

let {nombre, tipo='Basico', saldo=0} = clientee;
console.log(nombre);
console.log(tipo);
console.log(saldo);




const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', {
    idioma: 'ingles'
}];
const [
    primeraCiudad,
    segundaCiudad
] = ciudades;

console.log(primeraCiudad);
console.log(segundaCiudad);
const [, , ciudad, paris] = ciudades;
console.log(ciudad);
console.log(paris);
[idioma] = ciudades;
console.log(idioma);

const cliente2 = {
    tipo: 'Premium',
    saldo: 3000,
    datos: {
        nombre: 'Pedro',
        apellido: 'Perez',
        residencia: {
            ciudad: 'Mexico'
        }
    },
    movimientos: ['12-03-2018','13-03-2017','14-03-2016']

}

let {
    tipo,
    datos,
    datos : {residencia},
    datos: {movimiento},
    movimientos: [uno,dos]
} = cliente2;

// console.log(tipo);
// console.log(datos.apellido);
// console.log(residencia);
console.log(uno);
console.log(dos);


//Destructoring forma anterior

function reservacion(completo,

    //Destructoring forma anterior

    // opciones = opciones || {};
    // let metodo = opciones.metodoPago,
    //     cantidad = opciones.cantidad,
    //     dias = opciones.dias;

    //Destructoring forma nueva y les seteamos un default si no se reciben cierto parametros
    {
    metodo = 'efectivo',
    cantidad = 0,
    dias = 0 }={})
    {
    console.log(metodo);
    console.log(cantidad);
    console.log(dias);
    if(completo){
        console.log('Proceder a reservar');
    }else{
        console.log('Abandonar');
    }
    }

reservacion(
    true,
    {
        metodo: 'TC',
        cantidad: 5000,
        dias: 5
    }
)

//symbol
const simbolo = Symbol(); //no hay que darle new es primitivo de js
const simbolo2 = Symbol('Descripcion aqui');
//cada simbolo creado es diferente del otro
let nombre = Symbol();
let apellido = Symbol();

let persona = {};
persona.nombre = 'Juan';
//le agregamos un simbol al objeto con corchetes
persona[nombre] = 'Juan';
persona[apellido] = 'De la torre';
persona.saldo = 100;
persona.tipoCliente = 'Normal';

console.log(persona);

for (let i in persona){
    console.log( `${i} : ${persona[i]}`);
}

//no salen los symbol en las impresiones


let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #3');
carrito.add('Disco #2');
carrito.add('Disco #2');
carrito.add('Disco #2');

let numeros = new Set([1,2,3,4,5,6,7,6,5,4,3,2,1]);

// console.log(carrito);
// console.log(numeros);
//comprobar que un valor exista
// console.log(carrito.has('Guitarra'));
//carrito.delete('Camisa');
// console.log(carrito);
//carrito.clear();

carrito.forEach((producto,index) => {
    //en un set la llave y el valor son iguales!
    console.log(`Item ${index}: ${producto} `)
})

//como convertir un set arreglo
const arregloCarrito = [...carrito];

console.log(arregloCarrito);

//MAPS

let cliente = new Map();
cliente.set('nombre','Karen');
cliente.set('tipo','Premium');
cliente.set('saldo',3000);

//acceder a los valores

console.log(cliente.get('nombre'));
console.log(cliente.size);
//comprobar que un valor existe
console.log(cliente.has('apellido'));

//borrar un elemento del map
cliente.delete('nombre');
console.log(cliente.size);
cliente.clear();

const paciente = new Map([
    ['nombre','paciente'],
    ['habitacion','No definido']
]);
//paciente.set('nombre','Antonio');
paciente.set('habitacion',400);
paciente.set('habitacion',500);
console.log(paciente);

paciente.forEach((datos,index) => {
    console.log(`${index}: ${datos}`)
})
//iterador 
function crearIterador(carrito){
    let i = 0;
    return {
        siguiente: () => {
            let fin = (i >= carrito.length);
            let valor = !fin? carrito[i++]:undefined;
            return {
                fin: fin, 
                valor: valor
            }
        }
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3','Producto 4'];
const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

//el * es adelante del nombre
function *crearGenerador() {
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;

}

const iterador1 = crearGenerador();

console.log(iterador1.next().value);
console.log(iterador1.next().value);
console.log(iterador1.next().value);
console.log(iterador1.next().value);

function *nuevoGenerador(carrito) {
    for( let i = 0; i<carrito.length; i++){
        yield carrito[i];
    }
}

//creamos el carrito

const carrito = ['Producto 1','Producto 2','Producto 3','Producto 4'];

//recorremos el iterador
let iterador = nuevoGenerador(carrito);

console.log(iterador.next().value);
console.log(iterador.next().done);
 */

let valor, exReg;
exReg = /[0-9]/;
valor = 1992;

//una fecha en exp reg 20-10-2020
exReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2018';

//hora 1030
exReg = /\d\d:\d\d \D\D/;
valor = '10:30';

exReg = /\d+/;
valor = '1hola mundo'

//negar la expresion regular
exReg = /[^0-9]/;
valor = 1992;

//la sintaixs con llaves

exReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2010';

//letras o numeros
exReg = /\w+/;
valor = 'Mensaje de prueba';
//el espacio vacio no cuenta como num o letra
exReg = /\d+/;
valor = 1234;

exReg = /([0-9])\w+/;
valor = 1234; //true
valor = 'hola mundo';  //false

exReg = /([A-Z])\w+/;
valor = 'hola mundo'; //false
valor = 1234;//false
valor = 'MENSAJE EN MAYUSCULAS'; //true

exReg = /([a-z])\w+/;
valor = 'hola mundo'; //true
valor = 1234; //false
valor = 'MENSAJE EN MAYUSCULAS' //false

exReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


console.log(exReg.test(valor));
