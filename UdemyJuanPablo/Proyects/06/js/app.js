document.querySelector('#btnGenerar').addEventListener('click',cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e){

    e.preventDefault();

    //leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;


    const cantidadSeleccionada = document.getElementById('numero').value;

    let url='';
    url += "http://uinames.com/api/?";
    if(origenSeleccionado!== ""){
        url += `region=${origenSeleccionado}&`;
    }
    if(generoSeleccionado !== ""){
        url += `gender=${generoSeleccionado}&`;
    }
    if(cantidadSeleccionada !== ""){
        url += `amount=${cantidadSeleccionada}&`
    }
/*
    //conectar con ajax
    //iniciando xmlhttpRequest
    const xhr = new XMLHttpRequest();
    //abrimos la conexion
    xhr.open('GET',url,true);
    //datos e impresion del template
    xhr.onload= function(){
        if(this.status === 200){
            const nombres = JSON.parse(this.responseText);
            let htmlNombre = '<h2>Nombres Generados</h2>';
            htmlNombre += '<ul class="lista>';
            nombres.forEach(function (nombre) {
                htmlNombre += `
                    <li>${nombre.name}
                `;

            })
            htmlNombre += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombre;
        }
    }
    */

    //conectar con feth

    fetch(url)
        .then(res =>res.json())
        .then(data => {
            let htmlNombre = '<h2>Nombres Generados</h2>';
            htmlNombre += '<ul class="lista>';
            data.forEach(function (nombre) {
                htmlNombre += `
                <li>${nombre.name}</li>`
            })
            htmlNombre += '</ul>';
            document.querySelector('#resultado').innerHTML = htmlNombre;
        })
        .catch(error => console.log(error))
}