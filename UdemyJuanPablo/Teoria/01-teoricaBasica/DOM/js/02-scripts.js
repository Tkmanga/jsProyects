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

busqueda.addEventListener('keydown',() => {
    console.log('escribiendo... ');
})

//blur es un evento que cada vez que salgo u entro se ejecuta algo