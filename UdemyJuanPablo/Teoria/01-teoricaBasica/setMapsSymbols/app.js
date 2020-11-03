console.log('hola')

const carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa'); //lo va ignorar por que se repite es case Sensitive si tiene una diferencia minima lo va tomar como otro ingreso

carrito.delete('Disco #2'); //si no existe nos devuelve False


// console.log(carrito);
// console.log(carrito.size); //cuanto mide ?
// console.log(carrito.has('Camisa')); //respuesta en booleano si lo tiene o no

carrito.forEach((producto,index, pertenece) => {
    // console.log(`${index} : ${producto}`);
    // console.log(pertenece)
})
carrito.clear(); //vaciar tode el set

//ejemplo de uso de un set

//del siguiente arreglo eliminar los duplicados

const numeros = [10,20,30,40,50,10,20];

const noDupli = new Set(numeros);
// console.log(noDupli)

//weak set

const weakSet = new WeakSet();

const cliente = {
    nombre: 'juan',
    saldo: 100
}

weakSet.add(cliente);
//weakSet.add(2); //va devolver error los weakset solamente aceptan objeto

console.log(weakSet.has(cliente));
weakSet.delete(cliente);
//console.log(weakSet.size); //no existe esa funcion en weakset solamente en set y no son iterables (forEach)



//maps listas ordenadas en llave y valor

const cliente2 = new Map();

cliente2.set('nombre','karen'); //llave y valor
cliente2.set('tipo','premiun');
cliente2.set('saldo',4000);
cliente2.set([0],true);
cliente2.set([1],false);

//al igual que el Set() puede pedirse size, has y son iterables (forEach)

console.log(cliente2.get('nombre'));

cliente2.clear();

const paciente = new Map([['nombre','paciente'],['cuarto','no definido']]);
paciente.set('obra social',1234); //agregamos un valor
paciente.set('nombre','pacienteNuevo'); //reescribimos un valor
console.log(paciente);

//weakMap: funcion mantener una serie de datos como privados
const producto = {
    idProducto: 10
}
const wmap = new WeakMap();

wmap.set(producto,'monitor');
console.log(wmap.get(producto)); //nos va devolver monitor unicamente
//tambien podemos consultar .has y hacer .delete(producto), los wmap solamente aceptan objetos

//size no funciona

//Symbols

const sym = Symbol();
const sym2 = Symbol();
//los simbols no son iguales nunca aunque tengan el mismo contenido

//console.log(Symbol() === Symbol()); //false

const apellido = Symbol();



