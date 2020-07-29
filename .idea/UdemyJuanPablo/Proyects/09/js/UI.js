class UI {
    constructor() {
        //instanciamos la apo
        this.api = new API();
        // Iniciar el mapa
        this.mapa = this.inicializarMapa();
        //crear los markers con layer group
        this.markers = new L.layerGroup();
    }

    inicializarMapa() {
        // Inicializar y obtener la propiedad del mapa
        const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
        const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + enlaceMapa + ' Contributors',
                maxZoom: 18,
            }).addTo(map);
        return map;

    }

    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            .then(datos =>{
                const  resultado = datos.respuestaJSON.results;
                this.mostrarPines(resultado);
            })

    };

    mostrarPines(datos) {
        //limpiar los markers
        this.markers.clearLayers();
        //recorrer los establecimientos
        datos.forEach(dato => {
            //destrocturig
            const {latitude, longitude, calle, regular, premium} = dato;
            //crear popup
            const opcionesPopup = L.popup()
                .setContent(`
                    <p>Calle: ${calle}</p>
                    <p><b>Regular:</b>$ ${regular}</p>
                    <p><b>Premium:</b>$ ${premium}</p>   
                `)
            //agregar el pin
            const marker = new L.marker([
                parseFloat(latitude), parseFloat(longitude)
            ]).bindPopup(opcionesPopup);
            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }
    //obtener sugerencias
    obtenerSugerencia(busqueda){
        this.api.obtenerDatos()
            .then(datos => {
                //obtener los datos
                const resultado = datos.respuestaJSON.results;
                //enviar el json y la busqueda para el resultado
                this.filtrarSugerencias(resultado,busqueda);
            })
    }

    //filtra las sugerencias en base al input
    filtrarSugerencias(resultado,busqueda){
        //filtrar los resultados con .filter

        const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda)!== -1);

        //mostrar los pines

        this.mostrarPines(filtro);
    }
}