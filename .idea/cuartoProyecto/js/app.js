//constructor para seguro
 function Seguro(marca,anio,tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
    }
//esto esta encargado del UI
function Interfaz() {
        
    }
    
    //esto nos trae el maximo año actual
    const max = new Date().getFullYear(),
        min = max -20;

    const selectAnios = document.getElementById('anio');

    for(let i = max; i>= min; i--){
        let option = document.createElement('option');
        option.value = i; //le asignamos el valor
        option.innerHTML = i; //le asignamos que muestre en el form
        selectAnios.appendChild(option);
    }



console.log('asd');