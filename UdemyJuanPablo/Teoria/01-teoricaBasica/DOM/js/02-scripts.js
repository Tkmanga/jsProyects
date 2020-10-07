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
