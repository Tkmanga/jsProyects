//Date

const diaHoy = new Date().toLocaleDateString()      ; //Date.now() trae cada minuto desde el inicio de linux

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();

console.log(valor)