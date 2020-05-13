document.querySelector('#generar-nombre').addEventListener('click',cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e){

    e.preventDefault();

    //leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    console.log(origenSeleccionado+" "+generoSeleccionado );

    let url='';
}