export const nombreCliente = 'juan';
export const ahorrro = 100000;
//exportar una clase
export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro ${ahorro}`;
}
export class Cliente {
    constructor(nombre, reserva) {
        this.nombre  = nombre;
        this.reserva = reserva;
    }
    mostrarInformacion(){
            return `Cliente: ${this.nombre} - Ahorro: ${this.reserva}`;
    };


}