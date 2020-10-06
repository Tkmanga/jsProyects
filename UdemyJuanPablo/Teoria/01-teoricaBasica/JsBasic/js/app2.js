
const enlaces = document.getElementsByTagName('a');
for (let enlace of enlaces) {
    console.log(enlace.href);
}


//notation windows object

const nombre = prompt('');
console.log(`bienvenido ${nombre}`);

if (confirm('Eliminar?')) {
    console.log('Eliminado');
} else {
    console.log('nada paso');
}

let altura, anchura;
altura = window.outerHeight; //innerHeight
anchura = window.outerWidth; //innerwidth
console.log(altura);
console.log(anchura);

//igualmente se recomienda mas usar css antes que modificarlo con javascript

let ubicacion;

ubicacion = window.location;//el location tambien es un objeto al que le puedo consultar .hostname .search .port
window.location.href = 'http://twitter.com'; //una forma de redireccionar por medio de javascript
window.history.go(-1); //vamos contando para atras asi nos devuelve la ultima pagina accedida en base al historial

//navigator
ubicacion = window.navigator; //nos devuelve el nombre del navegaddor
ubicacion = window.navigator.appName;
ubicacion = window.navigator.appVersion;
ubicacion = window.navigator.userAgent;
ubicacion = window.navigator.language;

console.log(ubicacion)

//scope global funcion o bloque son los que tenemos
//estas son globales
var a = 'a';
let b = 'b';
const c = 'c';

function functionScope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCTION: ' + a, b, c);
}

functionScope();
//scope de bloque
if (true) {
    var a = 'AA'; // este si modifica el global
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE: ' + a, b, c);
}
//for
for (var a = 0; a < 10; a++) {
    console.log(a);
}


//DOM document object model



// me salite las primeras partes hasta el video 59 por que me parecian aburridas

localStorage.setItem('nombre','juan'); // aunque recarge o cierre el valor siempre se va quedar

sessionStorage.setItem('nombre','masdkf'); // cuando se cierra el navegador se va esto


//localStorage.removeItem('nombre');


const nombre = localStorage.getItem('nombre');

console.log(nombre);

