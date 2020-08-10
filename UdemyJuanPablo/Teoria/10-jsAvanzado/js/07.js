//herencia con protoype

//clases
function playList(nombre){
    this.nombre = nombre;
}
playList.prototype.play = function (){
    console.log(`reproduciendo ${this.nombre}`);
}
playList.prototype.eliminar = function () {
    console.log('eliminando... ' + this.nombre);
}
//herencia
function cancion(nombre,genero){
    playList.call(this, nombre);
    this.genero = genero;
}

//herencia de metodos

cancion.prototype = Object.create(playList.prototype);

const mus = new cancion('nothing else matters','heavy');
mus.play();