//new binding

function Automovil(modelo,color){
    this.modelo = modelo;
    this.color = color;
}
//el "new" para crear un nuevo objeto es el "new binding"
const auto = new Automovil('camaro','negro');