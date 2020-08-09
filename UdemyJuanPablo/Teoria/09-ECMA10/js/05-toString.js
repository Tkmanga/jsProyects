function sumar(a,b){
    return a+b;
}

console.log(sumar.toString());

function Automovil(modelo,color){
    this.modelo = modelo;
    this.color = color;
}

Automovil.prototype.toString = function autoString(){
    const datos = `Auto: ${this.modelo} y color ${this.color}`;
    return datos;
}

const Auto = new Automovil('camaro','negro');
console.log(Auto.toString());
