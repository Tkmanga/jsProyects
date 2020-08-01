import {Cliente} from "./cliente.js";

export const nombreEmpresa = 'ASD';
export let ahorrro = 400000000000;
export const categoria = 'Aprendizaje';
//exportar funciones


export function mostrarInformacion(nombre,ahorro,categoria){
    return `Cliente: ${nombre} - Ahorro: ${ahorro} - Categoria ${categoria}`;
}
export class Empresa extends Cliente {
    constructor(nombre,reserva,categoria) {
        super(nombre,reserva);
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro ${this.reserva} - Categoria ${this.categoria}`;
    }
}