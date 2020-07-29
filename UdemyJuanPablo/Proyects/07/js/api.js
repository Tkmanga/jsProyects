class API{
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async obtenerMonedasAPI() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;

        //fetch a la api
        const urlObtenerMonedas = await fetch(url);

        const monedas = await urlObtenerMonedas.json();

        return{
            monedas
        }

    }

    async obtenerValores(moneda,cryptomoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}&api_key=${this.apiKey}`;
        //consultar en restAPI
        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();

        return{
            resultado
        }
    }
}