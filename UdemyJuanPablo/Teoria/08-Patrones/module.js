const comprarBoleto = (function () {
    //Privado
    let evento = 'Conferencia JS 2019';
    let precio = 200;
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent  = `Comprando boleto para ${evento}`;
        document.querySelector('#app').appendChild(elemento);

    }
    //Publico
    return{
        mostrarBoleto: function (){
            console.log(evento);
            //tiene que estar dentro del retun para que funcione
            adquirirBoleto();
        }
    }
})();

comprarBoleto.mostrarBoleto(); //va funcionar
console.log(precio); //no va funcionar por que la variable es privada
