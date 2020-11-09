//Forma alternativa
// (function ( ){
//     console.log('desde un IFE');
//
//     window.nombreCliente = 'Juan';
// })(); //forma de mantener las variables privadas y que no se mezclen con otro archivo

export const nombreCliente = 'juan';
export const ahorrro = 100000;


export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro ${ahorro}`;
}

export function tieneSaldo(ahorrro) {
    if(ahorrro  > 0){
        console.log('el cliente tiene saldo')
    }else{
        console.log('el cliente no tiene saldo')
    }
}


//exportar una clase
export class Cliente {
    constructor(nombre, reserva) {
        this.nombre  = nombre;
        this.reserva = reserva;
    }
    mostrarInformacion(){
            return `Cliente: ${this.nombre} - Ahorro: ${this.reserva}`;
    };


}

export default function nuevaFuncion(){
    console.log('este es el export default');
}