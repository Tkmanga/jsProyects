class Interfaz{
    constructor() {
        //inicializa la app al instanciar
        this.init();
        //leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    //metodo para cuando inicialice la app
    init(){

    }
    //imprimir categorias
    imprimirCategorias(){
        const listaCategorias = eventBrite.obtenerCategorias();

    }

}