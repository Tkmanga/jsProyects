function persona(nombre){
    console.log(`hola soy ${nombre}`);
}

persona('Juan');

//this con implicit binding

const usuario = {
    nombre: 'Juan',
    edad:20,
    mascota: {
        nombre:'rockyta',
        edad:1,
        presentacion() {
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
        }
    },
    presentacion(){
        //el implicit binding es lo siguiente no  le podemos preguntar directamente "edad" por que no lo sabria
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }
}

usuario.presentacion();
usuario.mascota.presentacion();

