//aca voy a poner toda la teoria que no toque hasta el momento de la mejor forma posible para futuras referencias


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


// me salite las primeras partes hasta el video 59 por que me parecian aburridas

localStorage.setItem('nombre','juan'); // aunque recarge o cierre el valor siempre se va quedar

sessionStorage.setItem('nombre','masdkf'); // cuando se cierra el navegador se va esto


//localStorage.removeItem('nombre');


const nombre = localStorage.getItem('nombre');

console.log(nombre);

//PROYECTO UTILIZANDO LOCAL STORAGE
