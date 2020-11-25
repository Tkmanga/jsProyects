//variables y selectores

const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//eventos
eventsListeners();

function eventsListeners() {
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto); 
}
//clases

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {
    insertarPresupuesto (cantidad){
        
    }
}
//instanciar
const ui = new UI();

let presupuesto;

//funciones

function preguntarPresupuesto() {
    const presupuestoU = parseInt(prompt('cual es su presupuestoU ?'));

    if(presupuestoU === '' || presupuestoU === null || isNaN(presupuestoU) || presupuestoU <=0 ){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoU);
    console.log(presupuesto)

}