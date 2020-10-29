//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = []
//functions
eventsListeners();

function eventsListeners(){
    formulario.addEventListener('submit',agregarTweet);
}

function agregarTweet(e){
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    //validacion
    if(tweet === ''){
        mensajeError('Debe ingresar texto');
        return;
    }
    //añadir al arreglo de tweets

    tweets = [ ...tweets , tweet]; //spread operator
    console.log(tweets)
}

function mensajeError(error){
    const mensaje = document.createElement('p');
    mensaje.textContent = error;
    mensaje.classList.add('error');

    const listaTweets = document.querySelector('#contenido');
    listaTweets.appendChild(mensaje);

    setTimeout(()=> {
            //eliminar la alerta
            mensaje.remove()
        },3000)
}