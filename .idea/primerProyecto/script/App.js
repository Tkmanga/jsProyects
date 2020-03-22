/*
alert("asd");

document.getElementById('app').append("hola mundo");


let nombre = prompt("Cual es tu nombre ?");
let edad = prompt("cual es tu edad ?");
document.getElementById("app").append('Bienvenido'+nombre+' de '+edad+" años");


prompt()
confirm()
console.log();
console.warn();
console.error();
console.time();
console.timeEnd();


var nombre = "Juan", nombre1 = 'john';
var primerNombre;  //camelcase
var primer_nombre; //under scape
var PrimerNombre;  //pascalCase

//var let const
// var podes sobreescribirlo y redeclalarlo
// let no podes redeclararlo (usar el mismo nombre de variable)
// const no podes hacer ninguna de las 2 se declara 1 vez
let nombre = 'Juan', producto = 'libro';
console.log(nombre);

//string
let nombre,mensaje;
nombre = 'juan pablo';
nombre = "juan pablo";
mensaje = 'y entonces dije "buen curso!!"';
mensaje = "y entonces dije \' buen curso!! \'";
//concatenar javascript

mensaje = 'JAVA'+ 'SCRIPT';
//uniendo variables en una sola

let aprendiendo = 'aprendiendo',
    tecnologia = 'javascript';

//console.log(`${aprendiendo}`);

//12
let mensajee = 'aprendiendo javascript css html para ser frontend';

console.log(tecnologia.length);
console.log(tecnologia.concat(' ',"es genial"))
console.log(tecnologia.toUpperCase());
console.log(tecnologia.toLowerCase());

console.log(mensajee.indexOf('PHP')); //te devuelve -1 si no lo encuentra


// 13

let mensaje = "asd asd ";
console.log(mensaje.substring(-2,3));
//poniendo negativo de atras hacia adelante
// poniendo 0 desde el comienzo y asi sucesivamente para adelante
console.log(mensaje.slice(0,2)); //corta el string
console.log(mensaje.split(' ')); // separa un texto cada vez que encuentra un espacio por ejemplo

console.log(mensaje.replace('asd',"PHP")); //este reemplaza el primer encuentro con lo que quieras que ponga en su lugar
console.log(mensaje.includes('asd')); //este confirma o no si existe lo que pidamos dentro de la variable a la que le consultamos
let tecno = "JavaScript";
console.log(tecno.repeat(10)); //imprime la cantidad de veces que necesitemos

//numeros

const numero1 = 30, numero2 = 20, numero3 = 20.20, numero4 = -1020, numero5 = -3;
let resultado;

resultado = numero1+numero2;
resultado = numero1-numero2;
resultado = numero1*numero2;
resultado = numero1/numero2;
resultado = numero1%numero2;

console.log(resultado);

//Pi
resultado = Math.PI;
resultado = Math.round(2.4); //redondea hacia arriba
resultado = Math.floor(2.4); // redondea hacia abajo
resultado = Math.sqrt(144); //raiz cuadrada
resultado = Math.abs(numero5); //numero absoulto
resultado = Math.pow(8,3); //potencia
resultado = Math.min(3,2,45,6,78); //me devuelve el minimo
resultado = Math.max(3,2,45,6,78); //maximo
resultado = Math.random(); //numero random
resultado = (10+20)*5;
resultado = (10+20+20+10+40)*.20;
let puntaje = 10;
puntaje++;
++puntaje;
puntaje--;
--puntaje;
puntaje = 20;
puntaje +=3;
puntaje -=3;
puntaje *=300;
puntaje /=300;
puntaje %=2;



let valor;

valor = 'Cadena de texto';
valor = 20;
valor = true;
valor = null;
valor = undefined;
//objeto
valor = {
    nombre: 'juan'
};
valor = 4.2;
valor = -20;
//simbolo
valor = Symbol('Simbolo');
//arreglo
valor = [1,2,3,45];
valor = new Date();

console.log(typeof valor); //nos devuelve que tipo de dato es la variable




//en los calculos es importante las () para separar lo primero que quieras hacer

// me salite las primeras partes hasta el video 59 por que me parecian aburridas

localStorage.setItem('nombre','juan'); // aunque recarge o cierre el valor siempre se va quedar

sessionStorage.setItem('nombre','masdkf'); // cuando se cierra el navegador se va esto


//localStorage.removeItem('nombre');


const nombre = localStorage.getItem('nombre');

console.log(nombre);

//PROYECTO UTILIZANDO LOCAL STORAGE
 */

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







