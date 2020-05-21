class Interfaz{
    constructor() {
        //inicializa la app al instanciar
        this.init();
        //leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    //metodo para cuando inicialice la app
    init(){
        this.imprimirCategorias();
    }
    //imprimir categorias
    imprimirCategorias(){
        const listaCategorias = eventBrite.obtenerCategorias()
            .then(categorias =>{
                const cats = categorias.categorias.categories;
                const listadoCategorias = document.getElementById('listado-categorias');
                cats.forEach(cat => {
                    let optionCategoria = document.createElement('option');
                    optionCategoria.value = cat.id;
                    optionCategoria.appendChild(document.createTextNode(cat.name_localized));
                    listadoCategorias.appendChild(optionCategoria);
                })
            })

    }

    //Metodo para imprimir mensajes 2 parametros mensaje y clases

    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.classList = clases;
        div.appendChild(document.createTextNode(mensaje));
        //buscar un padre

        const buscadorDiv = document.getElementById('buscador');
        buscadorDiv.appendChild(div);
        //quitar el alert despues de 3 segundos
        setTimeout(() => {
            this.limpiarMensaje();
        },3000);
    }
    //desaparece el mensaje en caso de que exista

    limpiarMensaje(){
        const alert  = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}