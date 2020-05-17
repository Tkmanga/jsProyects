//arrow functions
//basico
let aprendiendo;
aprendiendo = function(){
  console.log('aprendiendo javascript');
}
//reducido
aprendiendoA = () => {
  console.log('aprendiendo arrow function de javascript');
}
//aun mas reducido
aprendiendoB = () => console.log('reducir codigo');
// AUN MAS REDUCIDO
aprendiendoC = () => "reducir aun mas codigo";
//devolviendo un objeto
aprendiendoD = () => ({tomate: 'perita'});
//pasandole parametros
aprendiendoD = (tec) => (console.log(`Aprendiendo ${tec}`));
//puede ir sin parentecis cuando tenes 1 parametro nada mas
aprendiendoD = tec => (console.log(`Aprendiendo ${tec}`));
//con mas parametros
aprendiendoD = (fru1, fru2) => (console.log(`Fruta ${fru1} ${fru2}`))

//maps

const productos = ['aaaa','bbb','ccasd','dqweredsf'];

const cantidadProductos =

/*productos.map(function(producto){
  return producto.length;
});


productos.map((producto) =>{
  return producto.length;
});

productos.map(producto =>{
  return producto.length;
});
*/
//vs mas reducida
productos.map(producto => producto.length);

//console.log(cantidadProductos);
//tambien podemos en vez de crear una variable imprimir sus valores en tiempo de salida

productos.forEach((producto) => console.log(producto.length));

//aprendiendoB();
//console.log(aprendiendoC());
aprendiendoD('tomates', 'lechuga');


///TEORICAA BASICA

//const a = document.querySelector('#encabezado');
//puede traer clases
//etiquetas
a = document.getElementById('encabezado');
//getElementById solamente busca items con I

a.style.background = '#333';
a.style.color = '#FFF';
a.style.padding = '20px';
a.textContent = 'Los mejores cursos';
//si queremos traer mas que un elementos tenemos que buscar los query que tienen ALL al final

console.log(a);

let enlace;
enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:nth-child(3)');
//dentro de los selectores con el primer argumento le decimos donde buscar y con el 2do que especificamente quermos bucar los
// <a> dentro de principal son todos iguales, es codigo css3 lo que usamos
console.log(enlace);

let enlaces = document.getElementsByClassName('enlace')[1];//enlace)[3]; podemos poner al final consultando directamente el 3ro
//esto busca todas los items con esa clase

//enlaces = enlaces[0];

enlaces.style.background = '#333';
enlaces.textContent = 'Nuevo Enlace';

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
const links = document.getElementsByTagName('a');
links[18].style.color = 'red';
link[18].textContent = 'Nuevo enlace';

let liink = Array.from(links);

enlaces.forEach(enlace => console.log(enlace.textContent));

const enlacee = document.querySelectorAll('#principal .enlace');
enlacee[1].style  