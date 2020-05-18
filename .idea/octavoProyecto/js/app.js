const ui = new Interfaz();
//leer formulario

const formulario = document.querySelector('#formulario').addEventListener('submit',(e)=>{
    e.preventDefault();
    //leer la moneda seleccionada

    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;


    //leer la cryptomoneda seleccionada

    const cryptomonedaSelect = document.querySelector('#criptomoneda');
    const cryptomonedaSeleccionada = cryptomonedaSelect.options[cryptomonedaSelect.selectedIndex].value;

    if(monedaSeleccionada === '' || cryptomonedaSeleccionada === '' ){
        ui.mostrarMensaje('ambos campos son obligatorios','alert');
    }else {
        console.log(monedaSeleccionada);
        console.log(cryptomonedaSeleccionada);
    }
})