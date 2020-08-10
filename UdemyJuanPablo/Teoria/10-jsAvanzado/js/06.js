//clases y prototypes
//proto
function playList(nombre){
    this.nombre = nombre;
}
playList.prototype.play = function (){
    console.log(`reproduciendo ${this.nombre}`);
}
playList.prototype.eliminar = function (){
    console.log('eliminando... '+this.nombre);
}
const playLis = new playList('rock 90s');
const playLis2 = new playList('pop');

playLis2.play();

//clases
class PlayList {
    constructor(nombre) {
        this.nombre = nombre;
    }
    play(){
        console.log(`reproduciendo ${this.nombre}`);
    }
    eliminar(){
        console.log('eliminando... '+this.nombre);
    }
}

const play = new PlayList('jose');
play.play();
play.eliminar();