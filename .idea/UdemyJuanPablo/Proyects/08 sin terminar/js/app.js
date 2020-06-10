//instanciamos ambas clases

const eventBrite = new Eventbrite();
const ui = new Interfaz();

//add events listeners

document.getElementById('buscarBtn').addEventListener('click',(e) => {
    e.preventDefault();
    //leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    //revisar que esten lleno ambos valores
    if(textoBuscador !== ''){
        //cuando si hay una busqueda
        eventBrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
            .then(eventos => {
                console.log(eventos)
            })

    }else{
        ui.mostrarMensaje('Falta llenar partes del formulario','alert alert-danger mt-4');
    }
});