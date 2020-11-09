class Cliente {
    #nombre;
    #saldo;
    constructor(nombre,saldo) {
        this.#nombre = nombre;
        this.#saldo = saldo;
    }

    mostrarInfo(){
        return `nombre: ${this.#nombre}, tu saldo: ${this.#saldo}`
    }
    //las propiedades estaticas no requieren el nombre de la instancia solo de la clase
    static bienvenida(){
        return `Bienvenido cliente`
    }
}

const juan = new Cliente('juan',500);
console.log(juan.mostrarInfo())
//ejemplo de uso de propiedad estatica
console.log(Cliente.bienvenida())

const Cliente2 = class {
    constructor(nombre,saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo(){
        return `nombre: ${this.nombre}, tu saldo: ${this.saldo}`
    }
    static bienvenida(){
        return `Bienvenido cliente`
    }
}

const juan2 = new Cliente2('juan2',1000);
console.log(juan2)

class Empresa extends Cliente {

    #telefono;
    #categoria;
    constructor(nombre,saldo, telefono, categoria) {
        super(nombre,saldo);
        this.#telefono = telefono;
        this.#categoria = categoria;
    }

    setTelefono (tel){
        this.#telefono = tel;
    }
    getTelefono(){
        return this.#telefono;
    }

    mostrarInfo() {
        let nuevoTexto = super.mostrarInfo();
        nuevoTexto += ` telefono ${this.telefono} y categoria ${this.categoria}`;
        return nuevoTexto;
    }

    static bienvenida(){
        return `Bienvenida empresa`
    }

}

const emp = new Empresa('Codigo con juan',500,49113639, 'gold')

/*
* atributos privados publicos y protected
*
* _
*
* */

console.log(emp.getTelefono())