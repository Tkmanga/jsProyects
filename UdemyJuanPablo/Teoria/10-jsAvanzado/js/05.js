//js event loop

console.log('yo me mostrare primero');

setTimeout(function (){
    console.log('yo me ejecuto segundo');
},0);

console.log('yo me ejecuto tercero');

setTimeout(function (){
    console.log('yo me ejecuto cuarto');
},0);

console.log('yo me ejecuto quinto');

// primero se van a ejecutar los que son console.log simplemente y dsp el primer timeout seguido por el 2do por que ?
//por que el setTimeout pone los procesos en una queue que es resuelta dsp de procesar el stack principal en este caso tode lo que es console.log
