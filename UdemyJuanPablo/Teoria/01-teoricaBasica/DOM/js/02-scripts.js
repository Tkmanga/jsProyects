//events

const a = document.addEventListener('DOMContentLoaded',() => {
    console.log('documento listo!');
});

const nav = document.querySelector('.navegacion');
//registra un evento
nav.addEventListener('mouseenter',() => {
    console.log('entrando');
    nav.style.backgroundColor = 'transparent';
});
nav.addEventListener('mouseout',() => {
    console.log('saliendo');
    nav.style.backgroundColor = 'white';
});

//mouseenter
// mouseout
// click
//mousedown,
// mouseup,
// dblclick

const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('input',(evt) => {
//     if(evt.target.value === ''){
//         console.log('fallo la validacion')
//     }
//     console.log(evt.target.value);
// })

// keydown se ejecuta cuando se preciona una tecla
// keyup se ejecuto cuando se suelta una tecla
//blur es un evento que cada vez que salgo u entro se ejecuta algo, se usa mucho cuando valido formularios
//paste, cut (el combo de teclas o mouse activa un evento tambien)
//input


const formulario3 = document.querySelector('#formulario');
formulario3.addEventListener('submit',validarFormulario);

function validarFormulario (evt){ //ya el addEventListener viene con una variable que le podemos asignar lo que quedramos como nombre
    
    evt.preventDefault();
    //la accion por default es enviar los datos y para evitar el pase lo prevenimos con esto
    console.log('buscando');
    console.log(evt.target.method);
}

//evento del scroll mouse

window.addEventListener('scroll', ()=>{

   const scrollPX = window.scrollY;
   //console.log(scrollPX);

   const premiun = document.querySelector('.premium');
   const ubicacion = premiun.getBoundingClientRect(); //te dice en que lugar se encuentra un elemento 

   if(ubicacion.top <784){
       console.log('el elemento ya esta visible'); 
   }else{
       console.log('aun no da mas scroll');
   }
   
});

//eventBubblig ? es cuando precionas en un evento y ese evento se propaga por muchos otros lugares

//una forma de evitarlo

/*
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titleDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e)=>{
    e.stopPropagation(); //cuando le damos click solamete va disparar 1 evento el q esta asignado para ese elemento
    console.log('click en card');
});

infoDiv.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('click en info');
});

titleDiv.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('click en title');
});

//como un elemento esta dentro de otro (un hijo y padre) dispara el evento tanto en card como en  info o img


 */

//otra  forma de prevenir un eventBubbling
/*
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click',evt => {
    if(evt.target.classList.contains('titulo')){
        console.log('diste click en titulo');
    }
    if(evt.target.classList.contains('precio')){
        console.log('diste click en precio');
    }
    if(evt.target.classList.contains('card')){
        console.log('diste click en card');
    }

});

 */


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
// imagenesArr.forEach(function (imagen) {
//     console.log(imagen);
// })

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
// console.log(encabezadoo);

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

//console.log(a);

let enlace;
enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:nth-child(3)');
//dentro de los selectores con el primer argumento le decimos donde buscar y con el 2do que especificamente quermos bucar los
// <a> dentro de principal son todos iguales, es codigo css3 lo que usamos
// console.log(enlace);

let enlaces = document.getElementsByClassName('enlace')[1];//enlace)[3]; podemos poner al final consultando directamente el 3ro
//esto busca todas los items con esa clase

//enlaces = enlaces[0];

enlaces.style.background = '#333';
enlaces.textContent = 'Nuevo Enlace';

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
const links = document.getElementsByTagName('a');
links[18].style.color = 'red';
links[18].textContent = 'Nuevo enlace';

let liink = Array.from(links);

// enlaces.forEach(enlace => console.log(enlace.textContent));

const enlacee = document.querySelectorAll('#principal .enlace');
enlacee[1].style;

