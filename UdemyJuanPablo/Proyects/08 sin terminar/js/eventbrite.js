class Eventbrite{
    constructor() {
        this.toke_auth = `XQ5MAHDG4NNCPE5SKPU4`;
        this.ordenar = 'date';
    }
    //mostrar resultados de la busqueda
    async obtenerEventos(evento,categoria){
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.toke_auth}`)
        //espera la respuesta del evento y lo devuelve como json

        const eventos = await respuestaEvento.json()
        return {
            eventos
        }
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