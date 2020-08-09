//explicit binding

function persona(el1,el2){
    console.log(`hola soy ${this.nombre} y me gusta el ${el1} ${el2}`);
}
const informacion = {
    nombre: 'Juan',
    trabajo: 'Programador'
}
const generosMusicales = ['Heavy metal','Rock']

//call existe en todas las funciones
//explicit binding con call hay q agregar cada posicion que queremos pasar
persona.call(informacion, generosMusicales[0],generosMusicales[1]);

//explicit binding con applu si toma un arreglo

persona.apply(informacion,generosMusicales);

//explicit bindind .bind crea una funcion identica a la configurada que podemos llamar directamente 
const nuevaFn = persona.bind(informacion,generosMusicales[0],generosMusicales[1]);
nuevaFn();

