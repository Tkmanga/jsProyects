//variables
const presupuestoUsuario = prompt('cual es tu presupuesto semanal ?');
const formulario = document.getElementById('agregar-gasto');

let cantidadPresupuesto;
//clases

//clase de presupuesto
class Presupuesto{
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    //metodo para ir restando del presupuesto actual
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}

//clase de interfaz
class Interfaz{
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje,tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert');
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        //insertar en el dom
        document.querySelector('.primario').insertBefore(divMensaje,formulario);
        //quitar el alert despues de 3 segundos
        setTimeout(function () {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        },3000)
    }

    agregarGastoListado(nombre,cantidad){
        const gastosListado = document.querySelector('#gastos ul');

        //crear un li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        li.innerHTML = `
            ${nombre} 
            <span class="badge badge-primary"> $ ${cantidad}</span>
        `;
        gastosListado.appendChild(li);
    }
    //comprueba el presupuesto restante

    presupuestoRestante(cantidad){
        const restante = document.querySelector('span#restante');
        //leemos el presupuesto restante
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
        restante.innerHTML = `${presupuestoRestanteUsuario}`;
        this.comprobarPresupuesto();


    }

    //cambia de color el presupuesot restante

    comprobarPresupuesto(){
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        //comprobar el 50% del gasto
        const restante = document.querySelector('.restante');
        if((presupuestoTotal/4)>presupuestoRestante ){

            restante.classList.remove('alert-success','alert-warning');
            restante.classList.add('alert-danger');
        }else if((presupuestoTotal/2)>presupuestoRestante){

            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }

}
//eventlisteners
document.addEventListener('DOMContentLoaded',function () {
    if(presupuestoUsuario === null || presupuestoUsuario === ''){
        window.location.reload();
    }else{
        //esto crea el objeto de presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        //instanciar la clase de interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});

formulario.addEventListener('submit',function (e) {
    e.preventDefault();
    //leer del formulario de gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;
    //instanciar la interfaz
    const ui = new Interfaz();

    //comprobar que los campos no esten vacios
    if(nombreGasto == '' || cantidadGasto == ''){
        console.log('hubo un error');

        //aviso al usuario
        ui.imprimirMensaje("Hubo un error","error");
    }else{
        //insertar en el html
        ui.agregarGastoListado(nombreGasto,cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
        //aviso al usuario
        ui.imprimirMensaje("Se cargo correctamente","succes");
    }
})