//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = []
//functions
eventsListeners();

function eventsListeners(){
    formulario.addEventListener('submit',agregarTweet);
    document.addEventListener('DOMContentLoaded',publicarTweets);
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
    const tweetObj = {
        id: Date.now(),
        tweet //en recientes versiones si ambos coinciden podemos poner solo 1
    }

    tweets = [ ...tweets , tweetObj]; //spread operator
    crearHTML()
    guardarTweetsLocalStorage();
    //reiniciar el formulario
    formulario.reset()
}

function guardarTweetsLocalStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets))
}

function publicarTweets(){

    tweets = JSON.parse(traerTweetsLocalStorage()) || [];

    crearHTML()

}

function traerTweetsLocalStorage(){
    return localStorage.getItem('tweets');
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

function crearHTML(){
    limpiarHTML();
    if(tweets.length > 0){
        tweets.forEach(tweet =>{

            //agregar un boton
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            //añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }


            //crear el html
            const l = document.createElement('li');
            //añado texto
            l.innerText =  tweet.tweet;
            l.appendChild(btnEliminar);
            //insertar en el html
            listaTweets.appendChild(l);

        })
    }
}

//limpiar HTML

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    guardarTweetsLocalStorage();
    crearHTML();
}