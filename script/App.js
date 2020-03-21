/*
alert("asd");

document.getElementById('app').append("hola mundo");


let nombre = prompt("Cual es tu nombre ?");
let edad = prompt("cual es tu edad ?");
document.getElementById("app").append('Bienvenido'+nombre+' de '+edad+" años");


prompt()
confirm()
console.log();
console.warn();
console.error();
console.time();
console.timeEnd();


var nombre = "Juan", nombre1 = 'john';
var primerNombre;  //camelcase
var primer_nombre; //under scape
var PrimerNombre;  //pascalCase

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
mensaje = "y entonces dije \' buen curso!! \'";
//concatenar javascript

mensaje = 'JAVA'+ 'SCRIPT';
//uniendo variables en una sola

let aprendiendo = 'aprendiendo',
    tecnologia = 'javascript';

//console.log(`${aprendiendo}`);

//12
let mensajee = 'aprendiendo javascript css html para ser frontend';

console.log(tecnologia.length);
console.log(tecnologia.concat(' ',"es genial"))
console.log(tecnologia.toUpperCase());
console.log(tecnologia.toLowerCase());

console.log(mensajee.indexOf('PHP')); //te devuelve -1 si no lo encuentra
 */

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
resultado = Math.sqrt(144); //raiz cuadrada
resultado = Math.abs(numero5); //numero absoulto
resultado = Math.pow(8,3); //potencia
resultado = Math.min(3,2,45,6,78); //me devuelve el minimo
resultado = Math.max(3,2,45,6,78); //maximo
resultado = Math.random(); //numero random
//en los calculos es importante las () para separar lo primero que quieras hacer

