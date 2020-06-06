// Eliminar de Local Storage
localStorage.clear();

let elemento = document;
elemento = document.all;
elemento = document.all[10]; //esta es una forma de seleccionar un elemento pero no es la mas usada
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL; // url
elemento = document.characterSet; //utf etc
elemento = document.forms; //devuelve un formulario
elemento = document.forms[0]; //devuelve un formulario

elemento = document.forms[0].id; //devuelve un formulario
elemento = document.forms[0].classList;
elemento = document.forms[0].className;
elemento = document.forms[0].classList[0];
elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src'); // .3 aca habia un .3 no me acuerdo por que
elemento = document.scripts;
elemento = document.images;
let imagenes = document.images;
let imagenesArr = Array.from(imagenes);
imagenesArr.forEach(function (imagen) {
    console.log(imagen);
})

//get
let encabezado;
encabezado = document.getElementById('encabezado');
//.classname
//.id
//.textContent
//.innerText
//.style.background se les puede hacer miles de modificaciones

// Query Selector

const encabezadoo = document.querySelector('#encabezado');
console.log(encabezadoo);

//aplicar CSS

encabezadoo.style.background = '#333';


///TEORICAA BASICA

//const a = document.querySelector('#encabezado');
//puede traer clases
//etiquetas
a = document.getElementById('encabezado');
//getElementById solamente busca items con I

a.style.background = '#333';
a.style.color = '#FFF';
a.style.padding = '20px';
a.textContent = 'Los mejores cursos';
//si queremos traer mas que un elementos tenemos que buscar los query que tienen ALL al final

console.log(a);

let enlace;
enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:nth-child(3)');
//dentro de los selectores con el primer argumento le decimos donde buscar y con el 2do que especificamente quermos bucar los
// <a> dentro de principal son todos iguales, es codigo css3 lo que usamos
console.log(enlace);

let enlaces = document.getElementsByClassName('enlace')[1];//enlace)[3]; podemos poner al final consultando directamente el 3ro
//esto busca todas los items con esa clase

//enlaces = enlaces[0];

enlaces.style.background = '#333';
enlaces.textContent = 'Nuevo Enlace';

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
const links = document.getElementsByTagName('a');
links[18].style.color = 'red';
link[18].textContent = 'Nuevo enlace';

let liink = Array.from(links);

enlaces.forEach(enlace => console.log(enlace.textContent));

const enlacee = document.querySelectorAll('#principal .enlace');
enlacee[1].style
