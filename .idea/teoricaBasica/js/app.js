//aca voy a poner toda la teoria que no toque hasta el momento de la mejor forma posible para futuras referencias
/*

alert("asd");

document.getElementById('app').append("hola mundo");


let nombre = prompt("Cual es tu nombre ?");
let edad = prompt("cual es tu edad ?");
document.getElementById("app").append(`Bienvenido ${nombre} de ${edad} años de edad`);
// ese tipo de comilla es alt+96

prompt()
confirm()
//los console nos devuelve undefined por que toda funcion tiene un "return" al no tener algo para retornar tiene esto por defecto pero no afecta el programa
console.log();
console.warn();
console.error();
console.time();
//aca tendriamos que poner codigo para medir el tiempo de respuesta ! el time end nos devuelve la cantidad de milisegundos que pasaron desde el time
console.timeEnd();
//se pueden mandar arrays por console y la funcion table me lo imprime en una tabla
console.table();


var nombre = "Juan", nombre1 = 'john';
var primerNombre;  //camelcase
var primer_nombre; //under score
var PrimerNombre;  //pascalCase
var primernombre; //se usa pero no se recomienda

//var let const
// var podes sobreescribirlo y redeclalarlo
// let no podes redeclararlo (usar el mismo nombre de variable)
// const no podes hacer ninguna de las 2 se declara 1 vez
let nombre = 'Juan', producto = 'libro';
console.log(nombre);

//string
let nombre,mensaje;
nombre = 'juan pablo';
nombre = "juan pablo";
mensaje = 'y entonces dije "buen curso!!"';
mensaje = 'y entonces dije \' buen curso!! \'';
//concatenar javascript

mensaje = 'JAVA'+ 'SCRIPT';
//uniendo variables en una sola

let aprendiendo = 'aprendiendo',
    tecnologia = 'javascript';

//console.log(`${aprendiendo} ${tecnologia}`);

let mensajee = 'aprendiendo javascript css html para ser frontend';

console.log(tecnologia.length);
console.log(tecnologia.concat(' ',"es genial"))
console.log(tecnologia.toUpperCase());
console.log(tecnologia.toLowerCase());

console.log(mensajee.indexOf('PHP')); //te devuelve -1 si no lo encuentra


// 13

let mensaje = "asd asd ";
console.log(mensaje.substring(-2,3));
//poniendo negativo de atras hacia adelante
// poniendo 0 desde el comienzo y asi sucesivamente para adelante
console.log(mensaje.slice(0,2)); //corta el string
console.log(mensaje.split(' ')); // separa un texto cada vez que encuentra un espacio por ejemplo

console.log(mensaje.replace('asd',"PHP")); //este reemplaza el primer encuentro con lo que quieras que ponga en su lugar
console.log(mensaje.includes('asd')); //este confirma o no si existe lo que pidamos dentro de la variable a la que le consultamos
let tecno = "JavaScript";
console.log(tecno.repeat(10)); //imprime la cantidad de veces que necesitemos

//numeros

const numero1 = 30, numero2 = 20, numero3 = 20.20, numero4 = -1020, numero5 = -3;
let resultado;

resultado = numero1+numero2;
resultado = numero1-numero2;
resultado = numero1*numero2;
resultado = numero1/numero2;
resultado = numero1%numero2;

console.log(resultado);

//Pi
resultado = Math.PI;
resultado = Math.round(2.4); //redondea hacia arriba
resultado = Math.floor(2.4); // redondea hacia abajo
//cell para redondear hacia arriba
resultado = Math.sqrt(144); //raiz cuadrada
resultado = Math.abs(numero5); //numero absoulto
resultado = Math.pow(8,3); //potencia
resultado = Math.min(3,2,45,6,78); //me devuelve el minimo
resultado = Math.max(3,2,45,6,78); //maximo
resultado = Math.random(); //numero random
resultado = (10+20)*5;
resultado = (10+20+20+10+40)*.20;
let puntaje = 10;

puntaje++;
++puntaje;
puntaje--;
--puntaje;
puntaje = 20;
puntaje +=3;
puntaje -=3;
puntaje *=300;
puntaje /=300;
puntaje %=2;



let valor;

valor = 'Cadena de texto';
valor = 20;
valor = true;
valor = null;
valor = undefined;
valor = 4.2;
valor = -20;
//objeto
valor = {
    nombre: 'juan'
};
//simbolo
valor = Symbol('Simbolo');
//arreglo
valor = [1,2,3,45];
valor = new Date();

console.log(typeof valor); //nos devuelve que tipo de dato es la variable

const num1 = 20, num2 = 50, num3='20';
console.log(num1 < num2); // < >
console.log(num1 > num2);
console.log(20 === '20'); // usando solo == hubiera dado true
console.log(2 != 3 );
console.log('hola'==' hola');
console.log('a'>'b'); //false por que la A es menor que Z y lo mismo con a to z;
console.log(null == undefined) // true, pero si usamos el operador estricto es false;


const numero1 = "50", numero2 = 10, numero3 = 'tres';
console.log(Number(numero1) + numero2); // si uno es cadena, lo concatena

console.log(parseInt(numero1)+numero2); //otra forma de solucionarlo

console.log(numero1-numero2); //en el caso del + lo concatena, pero en el meno sabe que tiene que restar algo...

console.log(typeof numero1);

//si intento hacer un typeof o Number o parseInt de una cadena de texto te va imprimir NaN o number vagamente

let dato;
dato = Number("20");
dato = Number("20.1234");
dato = Number(true); //nos devuelve 1
dato = Number(false); //nos devuelve 0
dato = Number(null);
dato = Number(undefined);
dato = Number("hola numero");
dato = Number([1,2,3,4]);
dato = parseInt('100');
dato = parseFloat('100');
dato = parseFloat('100.2030');
dato = parseInt('100.23');

//to fixed
dato = 265526;
dato = 23132132.15616516;

console.log(dato.toFixed(2));

//to fixed es una funcion que corta el decimal en la cantidad de numeros que precisemos

let cp = 90210;
cp = String(cp);
console.log(cp.length) // si yo intento hacer un length de un numero no va encontrar la funcion por que esta disponible solo para cadenas de texto
let dato;
dato = '4'+'4';
dato = String(dato);

//booleanos
dato = true;
dato = false;
// de arreglo a string
dato = [1,2,3];
// toString();
dato = 20;
dato = true;
dato = [1,2,3];
dato = null; // esto devuelve error cuando se intenta hacer toString();

dato = dato.toString();

console.log(dato); // false
console.log(dato.length); //undefinded
console.log(typeof dato);  // boolean
*/

//alert('asdd');
/*
const producto1 = 'Pizza',
    precio1 = 30,
    producto2 = 'Hamburgesa',
    precio2 = 40;


//forma vieja de crear un templade de html
/*
let html;
html =  '<ul>'+
        '<li>Orden: '+ producto1+ '</li>'+
        '<li>Precio: '+ precio1+ '</li>'+
        '<li>Orden: '+ producto2+ '</li>'+
        '<li>Precio: '+ precio2+ '</li>'+
        '<li>Total: '+ (precio1+precio2)+ '</li>'+
        '</ul>';
*/

// forma mas normal de crera los templade
/*
html = `
        <ul>
            <li>Orden: ${producto1}</li>
            <li>Precio: ${precio1}</li>
            <li>Orden: ${producto2}</li>
            <li>Precio: ${precio2}</li>
            <li>Total: ${total(precio1,precio2)}</li>
        </ul>`;

function total(precio1,precio2){
    return precio1+precio2;
}

document.getElementById('app').innerHTML = html;


//crear un arreglo
const numeros = [10,20,30,40,50];

//arreglo de string metodo alternativo
const meses = new Array('enero','febrero','marzo','abril');

//arreglo mesclado
const mezclado = ['hola',1,2,3,false];

// el length te dice cuantos elementos tiene un arreglo
// Array.isArray(x) devuelve un booleano confirmando si es un array

console.log(meses[1]); // forma de acceder a un elemento preciso del arreglo
meses[4] = 'Mayo'; //reemplazando un valor del arreglo
meses.push('febrero'); // agregar un elemento al final del arreglo

//encontrar un elemento en el arreglo
console.log(meses.indexOf('Abril'))

//como agregar un elemento al inicio del arreglo
meses.unshift('Mes 0');

//eliminar un elemento de un arreglo
meses.pop();

//eliminar un elemento del inicio del arreglo
meses.shift();

//quitar un rango del arreglo
meses.splice(2,1);

//revertir
meses.reverse();

let arreglo1 = [1,2,3], arreglo2 = [9,8,7];

console.log(arreglo1.concat(arreglo2)); //los une

// ordenar un arreglo
const frutas = ['Platano','Manzana','Fresa','Naranja','Zanahoria']; //lo ordena alfabeticamente
frutas.sort();
console.log(frutas);

//ordenar numeros
arreglo1 = [3,8,1,0,5];

arreglo1.sort();
console.log(arreglo1);


arreglo1.sort(function (x,y) {
    return y-x;
});
console.log(arreglo1);

let numeros = [1,2,3];

numeros = [3,4]; // wrong way no se puede cambiar por que no especifico que quiero cambiar del arreglo
numeros[0] = 4; //ok
numeros.push(5); //agregarndo al final

numeros = ['Enero','Febrero']; // esto si se puede hacer

console.log(numeros);

//objetos

const persona = {
    nombre: 'miguel',
    apellido: 'martinez',
    profesion: 'diseñador grafico',
    email: 'lala@hotmail.com',
    edad: 20,
    musica: ['trance','rock','Grunge'],
    hogar: {
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    },
    nacimiento: function () {
        return new Date().getFullYear() - this.edad;
    }

}

console.log(persona); //persona.algo para acceder a ese objeto y persona.algo[x] para acceder al valor e un arrelgo
persona.musica.push('alternativo');
console.log(persona.hogar.ciudad);
//console.log(persona['hogar']['pais']); // esto no es muy usada ni recomendada
console.log(persona.nacimiento());

const autos = [
    {modelo:'Mustang', motor:6.0},
    {modelo:'Camaro', motor:6.1},
    {modelo:'Challenger', motor:6.2},
];
//ejemplo de for
for(let i = 0; i<autos.length; i++){
    console.log(`${autos[i].modelo} ${autos[i].motor}`);
}

autos[0].modelo = 'Audi';  // accediendo de forma individual si se puede modificar aunque sea const
const autos = { // no se puede hacer por que ya esta declarado con constante habria que cambiarlo a let
    modelo: 'Auto',
    motor: 2.3
}
console.log(auto)

function saludar(){
    console.log('Hola miguel');
}

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function sumar(a,b){
    console.log(a+b);
}

function sumar(a,b) {
    return a+b;
}

function saludar(nombre = 'Visitante') { // forma nueva
    //if(typeof nombre === 'undefined'){nombre = 'Visitante'} // forma vieja
    return `hola ${nombre}`
}

//function expression

const saludar = function (nombre='visitante',edad=30, trabajo = 'desarrollador web') {
    return `Hola, tienes ${edad}, profesion ${trabajo} y te llamas ${nombre}`
}


// IIFE

    (function (tecnologia) {
    console.log(`Creando un ${tecnologia}`)
    })('javascript');

const musica = {
    reproducir: function (id) {
        console.log(`reproduciendo muisca ${id}`);
    },
    pausar: function (id) {
        console.log(`pausar la musica`)
    }
}

// los metodos tambien pueden guardarse/crearse fuera del objeto

musica.borrar = function (id){
    console.log(`Borrando la cancion con el id ${id}`)
}
musica.reproducir(30);
musica.pausar(30);
*/

obtenerClientes();
//funcion que no existe

try{
    algo();
}catch (e) {
    console.log(e);
}finally {
    console.log('No le importa, ejecuta de todos modos');
}
function obtenerClientes() {
    console.log('Descargando...');

    setTimeout(function () {
        console.log('Completo');
    },3000)
}

//en javascript existe un objeto llamado date

const diaHoy = new Date();

//fecha en especidifico mes, dia y año

let navidad2017 = new Date('12-25-2017');

console.log(navidad2017);
let valor;
//mes
valor = diaHoy.getMonth();
//dia
valor = diaHoy.getDate();
valor = diaHoy.getDay();
//obtener el año
valor = diaHoy.getMinutes();
//minutos
valor = diaHoy.getMinutes();
//hora
valor = diaHoy.getHours();
//todos los milisegundos desde 1970
valor = diaHoy.getTime();
//
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2015);
valor = diaHoy.getFullYear();

//condiconales

const edad = 19;

if(edad > 18) {
    // < > <= >=
    console.log('si se puede entrar al sitio');
}else{
    console.log('no puedes entrar al sitio ');
}

//comprobar que una variable tiene valor

const puntaje = 1000;

if(puntaje){
    // si no esta inicializado typeof puntaje != 'undefinded'
    console.log('el puntaje fue de '+puntaje);
}else{
    console.log('no hay puntaje');
}

let efectivo = 500;
let totalCarrito = 400;

if(efectivo>totalCarrito){
    console.log('Pago Correcto');
}else{
    console.log('Fondos Insuficientes');
}

let hora = 20;
if(hora > 0 && hora <= 10){
    console.log('buenos dias');
}else if(hora > 10 && hora <= 18) {
    console.log('buenas tardes');
}else if(hora > 19 && hora <= 24){
    console.log('buenas noches');
}else{
    console.log('hora no valida')
}

//operador ||

let efectivo = 300,
    credito = 700,
    disponible = efectivo+credito;
    totalCarrito = 500;

if(totalCarrito < efectivo || totalCarrito<credito ||totalCarrito < disponible){
    console.log('Puedo pagar');
}else{
    console.log('no puedo pagar ')
}
const logueado = true;

console.log(logueado === true ? 'si se logue':'no se logueo');

//switch
const  metodoPago = 'efectivo';
switch (metodoPago) {
    case 'efectivo':
        console.log(`el usuario pago con ${metodoPago}`)
        break;
    case 'checke':
        console.log(`el usuario pago con ${metodoPago}`)
        break;
    case 'efectivo':
        console.log(`el usuario pago con ${metodoPago}`)
        break;
    default:
        console.log('metodo no aceptado');
        break;
}
let mes;
const fechaa = new Date();
switch (new Date().getMonth() ) {
    case 0:
        mes = 'Enero';
        break;
    case 1:
        mes = 'EneroO';
        break;
    case 2:
        mes = 'EneroOO';
        break;
    case 3:
        mes = 'EneroO';
        break;
    case 4:
        mes = 'EnerOo';
        break;
    case 5:
        mes = 'Enero';
        break;
    case 6:
        mes = 'Enero';
        break;
    case 7:
        mes = 'Enero';
        break;
    case 8:
        mes = 'Enero';
        break;
    case 9:
        mes = 'Enero';
        break;
    case 10:
        mes = 'Enero';
        break;
    case 11:
        mes = 'Enero';
        break;
}

//FOR LOOPS

for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log('voy en el 5');
        break;
    }
    console.log(`Numero ${i}`);
}


//una forma es poner un if debajo de otro pero no es recomendada


/*
    // me salite las primeras partes hasta el video 59 por que me parecian aburridas

localStorage.setItem('nombre','juan'); // aunque recarge o cierre el valor siempre se va quedar

sessionStorage.setItem('nombre','masdkf'); // cuando se cierra el navegador se va esto


//localStorage.removeItem('nombre');


const nombre = localStorage.getItem('nombre');

console.log(nombre);

//PROYECTO UTILIZANDO LOCAL STORAGE
*/