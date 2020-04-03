

/*
* el usuario podra crear eliminar ver sus tweets en un listado
*
* los tweets se almacenaran en local storage
*
* el usuario podra agregar una cantidad ilimitada de tweets
*
* al  cargar la pagina los tweets deben cargarse de local storage al eliminarse deben quitarse de local storage
*
*
* */


// Variables
    const listaTweets = document.getElementById('lista-tweets');

//Event Listeners

    eventListener();

    function eventListener() {
        //cuando se envia un formulario
        document.getElementById('formularioo').addEventListener('submit', agregarTweet);
        //borrar tweet del DOM
        listaTweets.addEventListener('click', borrarTweet);
        //Esta funcion se ejecuta cuando finalizo de cargar toda la pagina 
        document.addEventListener('DOMContentLoaded',localStorageListo);
    }

//funciones

// añardir tweet al formulario

    function agregarTweet(e) {
        e.preventDefault();
        //leer el valor del texaera
        const tweet = document.getElementById('tweet').value;

        //crear elemento y añadirlo el contenido a la lista

        //creamos el boton borrar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'Borrar';
        //creamos la linea con el valor de la lista
        const li = document.createElement('li');
        //añadimos el valor del texbox
        li.innerText = tweet;
        //añadimos el boton borrar
        li.appendChild(botonBorrar);
        //añadiendo el tweet a la lista
        listaTweets.appendChild(li);

        //añadir a localstorage
        agregarTweetLocalStorage(tweet);
    }

    //elimina tweet del dom
    function borrarTweet(e) {
        e.preventDefault();
        if (e.target.className === 'borrar-tweet'){
            e.target.parentElement.remove();
            borrarTweetLocalStorage(e.target.parentElement.innerText);
        }


    }

    function localStorageListo() {
        let tweets = obtenerTweetsLocalStorage();
        tweets.forEach(function (tweet) {

            //crear elemento y añadirlo el contenido a la lista

            //creamos el boton borrar
            const botonBorrar = document.createElement('a');
            botonBorrar.classList = 'borrar-tweet';
            botonBorrar.innerText = 'Borrar';
            //creamos la linea con el valor de la lista
            const li = document.createElement('li');
            //añadimos el valor del texbox
            li.innerText = tweet;
            //añadimos el boton borrar
            li.appendChild(botonBorrar);
            //añadiendo el tweet a la lista
            listaTweets.appendChild(li);

        })
    }

    //agrega el tweet al local storage
    function agregarTweetLocalStorage(tweet) {
        let tweets = obtenerTweetsLocalStorage();
        // Añadir el nuevo tweet
        tweets.push(tweet);
        //Convertir de string arreglo para loca storage
        localStorage.setItem('tweets', JSON.stringify(tweets));

    }
    //trae los tweets de local storage
    function obtenerTweetsLocalStorage() {
        let tweets;
        //revisamos las variables de local storage
        if(localStorage.getItem('tweets')===null){
            tweets = [];
        }else {
            //vamos a guardar usando json
            tweets = JSON.parse(localStorage.getItem('tweets'));
        }

        return tweets;
        
    }
    
    function borrarTweetLocalStorage(tweet) {
       let tweets, tweetBorrar;
       //elimina BORRAR de la li
       tweetBorrar = tweet.substring(0,tweet.length-6);
       tweets = obtenerTweetsLocalStorage();
       tweets.forEach(function (tweet, index) {
            if (tweetBorrar === tweet){
                tweets.splice(index, 1);
            }
       });
       localStorage.setItem('tweets',JSON.stringify(tweets));
    }







