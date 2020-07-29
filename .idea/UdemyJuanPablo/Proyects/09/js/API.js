class API{
    async obtenerDatos(){
        let pageSize = 100;

        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${pageSize}`);
        //retornas datos como json
        const respuestaJSON = await datos.json();
        return  {
            respuestaJSON
        }
    }
}