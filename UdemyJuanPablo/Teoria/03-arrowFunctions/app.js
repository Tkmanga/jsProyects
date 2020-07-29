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