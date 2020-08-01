let observe = {
    obtenerOfertas: function (callback){
        if(typeof callback === 'function'){
            this.subscribes[this.subscribes.length] = callback;

        }
    },
    cancelarOferta: function (callback){
        for(let i =  0; i < this.subscribes.length; i++){
            if(this.subscribes[i] === callback){
                delete this.subscribes[i];
            }

        }
    },
    publicarOferta: function (oferta){
        for(let i =  0; i < this.subscribes.length; i++){
            if(typeof this.subscribes[i] === 'function'){
                this.subscribes[i](oferta);
            }

        }
    },
    crear: function (objeto){
        for (let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.subscribes = [];
            }

        }
    }

}
//vendedores
const udemy = {
    nuevoCurso: function (){
        const curso = 'Un nuveo curso de javascript!';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function (){
        const oferta = 'Compra un celular';
        this.publicarOferta(oferta);
    }
}

//crear las publicaciones
observe.crear(udemy);
observe.crear(facebook);


const juan = {
    compartir: function (oferta){
        console.log('Juan dice: Me interesa la oferta de '+oferta);
    }
};
const karen = {
    interesa: function (oferta){
        console.log('karen dice: me interesa la oferta'+oferta);
    }
}

udemy.obtenerOfertas(juan.compartir);
udemy.obtenerOfertas(karen.interesa);
udemy.nuevoCurso();
udemy.cancelarOferta(karen.interesa);
udemy.nuevoCurso();

facebook.obtenerOfertas(karen.interesa);
facebook.obtenerOfertas(juan.compartir);
facebook.nuevoAnuncio();