const cliente = {
    nombre: 'jose',
    saldo:500

}

function Persona (nombre,saldo,numTel){
    Cliente.call(this,nombre,saldo);
    this.numTel = numTel;
}


function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
Cliente.prototype.tipoCliente = function (){
    let tipo = ''
    if(this.saldo >= 500){
        tipo = 'gold'
    }else{
        tipo = 'normal'
    }
    return tipo;
}
Cliente.prototype.nombreClienteSaldo = function (){
    return `nombre ${this.nombre} saldo ${this.saldo}`
}

Cliente.prototype.retirarSaldo = function (retiro){
    if(this.saldo - retiro < 0){
        return 'No se puede realizar esa operacion'
    }else {
        this.saldo = this.saldo-retiro;
        return `le quedan ${this.saldo}`
    }
}

function Empresa(nombre,saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

// console.log(juan.nombreClienteSaldo())
// console.log(juan.retirarSaldo(1))
// console.log(juan.nombreClienteSaldo())

//Heredar funciones de un prototype hacia otro
Persona.prototype = Object.create(Cliente.prototype)
Persona.prototype.constructor = Cliente

const juan = new Persona('juan','500','1023-2345');

const empresa = new Empresa('Codigo','5000','cursos');

console.log(juan)