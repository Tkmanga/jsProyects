class Interfaz {

    constructor(){
        this.init();
    }

    init(){
        this.construirSelect();
    }

    construirSelect(){
        coti.obtenerMonedasAPI()

            .then(monedas=>{
                /*traemos el marco para llenarlo de options*/
                const select = document.querySelector('#criptomoneda');
                // usar object entries requiere una constante de [key,valor] a pesar de que usemos solamente value...
                for( const [key,value] of Object.entries(monedas.monedas.Data)){
                //object entries agarra un objeto de objetos y los convierte en un arreglo

                    //creamos un elemento opction
                    const option = document.createElement('option');
                    //le damos un valor
                    option.value = value.Symbol;
                    //texto
                    option.appendChild(document.createTextNode(value.CoinName));
                    //y lo agregamos a la lista
                    select.appendChild(option);
                }
            });

    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        //mostrar contenido
        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        },2000)

    }

    //imprime el resultado de la cotizacion

    mostrarResultado(resultado,moneda,cryptomoneda){
        const resultadoAnterior = document.querySelector('#resultado > div');
        if(resultadoAnterior){
            resultadoAnterior.remove();
        }
        const datosMoneda = resultado[cryptomoneda][moneda];
        //recortar precio
        let precio = datosMoneda.PRICE.toFixed(2),
            actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-Es');
        //construir el template

        let templatHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $${precio}</p>
                    <p>Variacion ultimo dia: %${datosMoneda.CHANGEPCTDAY.toFixed(2)}</p>
                    <P>Ultima Actualizacion: ${actualizado}</P>
                </div>
            </div>
        `;

        this.mostrarOcultarSpinner('block');

        setTimeout(() => {
            //insertar resultado
            document.querySelector('#resultado').innerHTML = templatHTML;
            this.mostrarOcultarSpinner('none');
        },3000);

    }

    //mostrar carga

    mostrarOcultarSpinner(vista){
        const spiner = document.querySelector('.contenido-spinner');
        spiner.style.display = vista;
    }


}