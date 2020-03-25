//un metodo para crear objetos
/*
const cliente = {
    nombre: 'Juan',
    saldo: 200,
    tipoCliente: function () {
        let tipo;
        if (this.saldo>1000){
            tipo='gold';
        }else if(this.saldo >500){
            tipo='platinum';
        }else{
            tipo = 'normal';
        }
        return tipo;
    }
}

 */

//console.log(cliente.tipoCliente());

// otro metodo de hacer objetos
/*
function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function () {
        let tipo;
        if(this.saldo > 1000){
            tipo = 'gold';
        }else if (this.saldo > 500){
            tipo = 'platinum';
        }else {
            tipo = 'normal';
        }
        return tipo;
    }
}

 */

//const persona = new Cliente('Pedro',30000);
//const persona2 = new Cliente('lala',203);

const nombre = 'pedro';
const nombre2 = new String('pedro');

const num1 = 20;
const num2 = new Number(20);

const boolean1 = true;
const boolean2 = new Boolean(true);
/*
const function1 = function (a,b) {
    return a+b;
}

 */

const function2 = new Function('a','b','return 1+2');

const persona1 = {
    nombre: 'juan'
}
const persona = new Object({nombre:'Juan'});

//tambien podes crear expresiones regulares

const arreglo1 = [1,2,3];
const arreglo2 = new Array(1,2,3);
/*
Uno es string directo y el otro es un objeto al que le
podemos pasar otros metodos ademas de los basicos
el NEW siempre me crea un nuevo objeto habilitandome eso
* */

// todos los objetos de js heredan sus funciones de un proto
/*
* primera razon para usar un prototype es para que no quede un objeto muy grande
* nos queda un codigo organizado
* una funcion puede estar disponible para el resto del proyecto
* */
/*
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    if (this.saldo > 1000){
        tipo = 'gold';
    }else if (this.saldo >500){
        tipo = 'platinium';
    }else{
        tipo = 'normal';
    }
    return tipo
}


//prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo} y tipo cliente es: ${this.tipoCliente()}`;
}

//retirar saldo
//Cliente.prototype.retirarSaldo = function(retiro){
 //   return this.saldo -= retiro;
//}

/*
const cliente1 = new Cliente('Pedro',100);
const cliente2 = new Cliente('Pedro',600);
cliente2.retirarSaldo(100);
const cliente3 = new Cliente('Pedro',1001);

console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());



function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre,saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Udemy',1000000,122453,'Educacion');

console.log(empresa.nombreClienteSaldo());

 */
//no hereda el proto si antes no le especififamos que queremos que herede
/*
 const Cliente = {
     imprimirSaldo: function(){
         return `hola ${this.nombre} tu saldo es ${this.saldo}`;
     },
     retirarSaldo: function(retiro){
         return this.saldo -= retiro;
     }
 }

 //Crear el objeto

const mary = Object.create(Cliente);
 mary.nombre = 'Mary';
 mary.saldo = 1000;
 mary.retirarSaldo(400);
 console.log(mary.imprimirSaldo());
 */

class Cliente {
    constructor(nombre,saldo) {
        this.nombre = nombre;
        //this.apellido = apellido;
        this.saldo = saldo;
    }
    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
    /*
    tipoCliente(){
        let tipo;
        if(this.saldo > 10000){
            tipo = 'Gold';
        }else if(this.saldo>500){
            tipo = 'Platinum';
        }else{
            tipo = 'Normal';
        }
        return tipo;
    }
    retirarSaldo(retiro){
        this.saldo -= retiro;
    }

     */
    //hay otros tipos de atributos como staticos
    static bienvenida(){
        return 'Bienvenido al cajero';
    }
}
/*
const marya = new Cliente ('Maria','Perez','10000');
marya.retirarSaldo(400);
console.log(Cliente.bienvenida());


 */
class Empresa extends Cliente {
    constructor(nombre,saldo,telefono,tipo) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
    //puedo reescribir metodos heredados
    static bienvenida(){
        return 'bienvenidos al cajero para empresas'
    }
}

const empresa = new Empresa('Empresa1',10000,12345,'Construccion');
console.log(Empresa.bienvenida())
console.log(Cliente.bienvenida())