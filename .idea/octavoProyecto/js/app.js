const coti = new API(`c6ad9092ef9c8eaba3be4a899cfb5a5f15969f395ada211dfb0e298f13383d27`);
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
        ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
    }else {

        coti.obtenerValores(monedaSeleccionada, cryptomonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,cryptomonedaSeleccionada);
            })
    }
})