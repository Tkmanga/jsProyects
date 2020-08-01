const Vendedor = function (nombre) {
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function (nombre) {
    this.nombre = nombre;
}



Vendedor.prototype = {
    oferta: function (articulo, precio){
    console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`)
    },
    vendido: function (comprador){
     console.log(`vendido a ${comprador} (Sonido de mazo)`);
    }
}

Comprador.prototype ={
    oferta: function (mensaje,comprador){
        console.log(`${comprador.nombre} : ${mensaje}`);

    }
}

const Subasta = function (){
    let compradores = {};

    return {
        registrar: function (usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;

        }
    }
}

//instanciar las clases

const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const karen = new Comprador('Karen');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();

subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(karen);


vendedor.oferta('Mustang',3000);
juan.oferta(3500,juan);
pablo.oferta(3501,pablo);

karen.oferta(10000,karen);

vendedor.vendido(karen.nombre)
