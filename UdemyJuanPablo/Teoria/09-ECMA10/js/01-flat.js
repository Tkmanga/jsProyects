const edades = [8,10,9, 11, [13,18, 20, [18,20,21]]];

console.log(edades.flat(2));
//Infinity para setear que aplane todos los arreglos no importa el nivel de profundidad
//hay niveles de arreglo dentro de arrelgo el flat los descomprime y los pone en un mismo arreglo
