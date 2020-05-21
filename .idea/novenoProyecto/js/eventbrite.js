class Eventbrite{
    constructor() {
        this.toke_auth = `XQ5MAHDG4NNCPE5SKPU4`;
        this.ordenar = 'date';
    }

    //obtiene las categorias en init

    async obtenerCategorias(){
        //consultar las categorias a las rest api
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.toke_auth}`);
        const categorias = await respuestaCategorias.json();
        return{
            categorias
        }
    }
    //obtener resultados de una busqueda
    /*asyn obtenerEventos(texto,cate){
        const respuestaEvento = await fetch(``)
    }

     */
}