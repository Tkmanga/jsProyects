const ui = new UI();

document.addEventListener('DOMContentLoaded',()=>{
    ui.mostrarEstablecimientos();
});

//habilitar busqueda de establecimiento
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
    if (buscador.value.length >= 5){
        ui.obtenerSugerencia(buscador.value);
    }else{
        ui.mostrarEstablecimientos();
    }
})