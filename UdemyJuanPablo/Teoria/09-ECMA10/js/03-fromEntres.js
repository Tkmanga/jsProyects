const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);
console.log(map);
map.delete('precio');
console.log(map);
//te permite crear un objeto de una serie de llaves y valores

const objeto = Object.fromEntries(map);
console.log(objeto);
