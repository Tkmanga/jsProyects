let elemento;
/*
elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className;

elemento = document.images;

elemento = document.scripts;

 */

//como seleccionar elementos por su clase

const header = document.getElementsByClassName('header');//es caseSensitive cuidado con las mayusculas
//console.log(header);

const hero = document.getElementsByClassName('hero');
//console.log(hero);

//si las clases existen mas de 1 vez

const contenedor = document.getElementsByClassName('contenedor');
//console.log(contenedores);

//si no encuentra una clase te retorna un arreglo vacio!

let formulario1 = document.getElementById('formulario'); //si hay 2 con el mismo id retorna el primero que encuentra

//si no existe el elemento nos devuelve un null

const card1 = document.querySelector('.card'); //nos devuelve el primero que encuentre
//console.log(card);
//podemos agregar mas selectores con espacio, ejemplo '.card .info' 

// seleccionar el segundo card de hospedaje

const segundaCard = document.querySelector('section.hospedaje .card:nth-child(2)');

//seleccionar el formulario

const formulario = document.querySelector('#formulario');
//console.log(formulario);

const navegacion2 = document.querySelector('nav'); //podemos enviarle etiquetas html directamente
//console.log(navegacion);

const cards = document.querySelectorAll('.card'); //nos devuelve todas las que coincida
//console.log(cards);

//si no encuentra nada que coincida devuelve un arreglo vacio

const encabezado = document.querySelector('.contenido-hero h1');
//console.log(encabezado);

//console.log(encabezado.textContent); //va encontrar todos los textos
//(encabezado.innerText); //no encuentra un texto que este oculto con CSS - visibility: hidden;
//console.log(encabezado.innerHTML); //se trae el html

document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';

const imagen = document.querySelector('.card img');

//console.log(imagen);

//imagen.src = 'lala/a.jpg'; //ejemplo cambio de imagen

//const encabeza3 = document.querySelector('h1');

//encabeza3.style.backgroundColor = 'red';
//encabeza3.style.fontFamily = 'Arial';
//encabeza3.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
// card.classList.add('nueva-clase','segunda-clase');
// card.classList.remove('segunda-clase');

const navegacion = document.querySelector('nav.navegacion');

// console.log(navegacion.firstElementChild); //traer el primer elemento de la lista
// console.log(navegacion.lastElementChild); //traer el ultimo elemento de la lista


// console.log(navegacion.childNodes);  //los elementos en blancos son considerados
// console.log(navegacion.children[1].nodeName); //ahora no importa los espacios en blanco solo me dan los hijos
// console.log(navegacion.children[1].nodeType);

// card.children[1].children[1].textContent = 'nuevo heading';
// card.children[0].src = 'lala/asdf.jpg';
// console.log(card.children[1].children[1].textContent); //con 1 entramos a info y en info llamamos a los hijos

//traversing the son to father

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement); //esta forma es mas segura

// console.log(card.nextElementSibling); //nos trae el hermano siguiente q esta en el mismo orden jerarquico

const ultimoCard = document.querySelector('.card:nth-child(4)');

// console.log(ultimoCard.previousElementSibling); //se regresa un hermano antes

//Hay 2 formas de eliminar un elemento por si mismo o desde el padre
//por si mismo
const primerEnlace = document.querySelector('a');
primerEnlace.remove();

//desde el padre 
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);

const enlace = document.createElement('a'); //le pasamos la etiqueta html q necesitemos crear
//agregandole texto
enlace.textContent = 'Nuevo enlace ';
// agregando href
enlace.href = '/nuevo-enlace';

enlace.target = "_blank";

enlace.setAttribute('data-enlace','nuevo-enlace');
enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion; 
// lo agregamos
//navegacion.appendChild(enlace); //lo coloca al final
navegacion.insertBefore(enlace,navegacion.children[1]);
//console.log(navegacion);

function miFuncion(){
    alert('diste click');
}

//creando un card de forma dinamica

//cuando estemos con una api nos va llegar los datos y nosotros le asignamos en una card por ejemplo

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = ' $800 por persona';
parrafo3.classList.add('precio');

//creamos div con la clase  info

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const img = document.createElement('img');
img.src = 'img/imagen2.jpg';

//crear el card

const cardExample = document.createElement('div');
cardExample.classList.add('card');

cardExample.appendChild(img);
cardExample.appendChild(info);

// insertar en el html

const contenedor2 = document.querySelector('.hacer .contenedor-cards');

contenedor2.insertBefore(cardExample, contenedor2.children[0]);

const btnFlotante = document.querySelector('.btn-flotante');

const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click',mostrarOcultarFooter);

function mostrarOcultarFooter (){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda'
    }else{
        footer.classList.add('activo');
        this.classList.add('activo'); //como el addEvent lo esta usando el mismo elemento podemos usar "this" 
        this.textContent = 'X cerrar'
    }
}