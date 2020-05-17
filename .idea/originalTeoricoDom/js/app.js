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
