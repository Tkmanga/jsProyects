import * as UI from './interfaz.js';
import {divBuscar, divMensajes, formularioBuscar} from "./interfaz.js";
import {API} from './api.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();
    //obtener datos del formulario
    const artista = document.querySelector('#artista').value,
        cancion = document.querySelector('#cancion').value;
    if(artista === '' || cancion === ''){
        //el usuario deja los campos vacios mostrar error
        UI.divMensajes.innerHTML = 'Error todos los campos son obligatorios';
        divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.innerHTML = '';
            divMensajes.classList.remove('error');
        },3000)
    }else{
        //consulta al API
        const api = new API(artista,cancion);
        api.consultarAPI()
            .then(data => {
                if(data.respuesta.lyrics){
                    //la cancion existe
                    const letra = data.respuesta.lyrics;
                    UI.divResultado.textContent = letra;

                }else{
                    UI.divMensajes.innerHTML = 'La cancion no existe, prueba otra busqueda';
                    divMensajes.classList.add('error');
                    setTimeout(() => {
                        UI.divMensajes.innerHTML = '';
                        divMensajes.classList.remove('error');
                        formularioBuscar.reset();
                    },3000);
                }
            })
    }



})