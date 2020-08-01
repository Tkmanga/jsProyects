import {nombreCliente, ahorrro ,Cliente} from "./cliente.js";
import {Empresa, nombreEmpresa, ahorrro as ahorroEmpresa, categoria, mostrarInformacion } from "./empresa.js";
//como la variable o funcion se llama igual en 2 modulos se le pone as para poder diferenciarlo en cada pull

//console.log(nombreCliente);

// let cliente  = new Cliente(nombreCliente,ahorrro);
// console.log(cliente.mostrarInformacion());

//console.log(ahorroEmpresa);

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);

console.log(empresa.mostrarInformacion());