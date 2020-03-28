//constructor para seguro
 function Seguro(marca,anio,tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
    }

    Seguro.prototype.cotizarSeguro = function () {

        /*
        //puedo directamente no pasarle nada por parametro y usar this. ya que es una instancia de Seguro
        console.log(this.marca);
        console.log(this.anio);
        console.log(this.tipo);
        */

        /*
        * 1 = americano 1.15;
        * 2 = asiatico 1.05;
        * 3 = europeo 1.35;
        * */
        let cantidad;
        const base = 2000;
        switch (this.marca) {
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base * 1.05;
                break;
            case '3':
                cantidad = base * 1.35;
                break;
        }
        // leer el año tomamos la diferencia entre la fecha actual y el año seleccionado
        const diferencia = new Date().getFullYear() - this.anio;
        //cada año de diferencia se reduce en un 3% el valor del seguro
        cantidad -= ((diferencia * 3) * cantidad) / 100;

        /*
        * si el seguro es basico se multiplica por 30% mas
        * si el seguro es completo se multiplica por 50% mas
        *
        * */
        if(this.tipo === 'basico'){
            cantidad *= 1.30;
        }else{
            cantidad *= 1.50;
        }
        if(this.tipo === 'completo'){
            cantidad *= 1.30;
        }else{

        }
    }

//esto esta encargado del UI
function Interfaz() {}
// mensaje que se imprime en el html
    Interfaz.prototype.mostrarError = function(mensaje,tipo) {

        const div = document.createElement('div');

        if(tipo === 'error'){
            div.classList.add('mensaje','error');
        }else{
            div.classList.add('mensaje','correcto');
        }
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector('.form-group'));

        setTimeout(function () {
            document.querySelector('.mensaje').remove();
        },3000);
    }

    Interfaz.prototype.mostrarResultado = function (seguro, total) {
        const resultado = document.getElementById('resultado');
        let marca;
        switch (seguro.marca) {
            case '1':
                marca = 'Americano';
                break;
            case '2':
                marca = 'Asiatico';
                break;
            case '3':
                marca = 'Europeo';
                break;
        }
        //crear div
        const div = document.createElement('div');
        div.innerHTML = `
            <p>Tu resumen: </p> 
            <p>Marca: ${marca}</p>
            <p>Año: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p>Total: $ ${total}</p>
            
        `;
        resultado.appendChild(div);
    }


    // events lisenetr
    const formulario = document.getElementById('cotizar-seguro');

    formulario.addEventListener('submit',function (e) {
        e.preventDefault();
        //leer la marca seleccionada de marcas
        const marca = document.getElementById('marca');
        const marcaSeleccionada = marca.options[marca.selectedIndex].value;
        //leer el año seleccionado del form
        const anio = document.getElementById('anio');
        const anioSeleccionado = anio.options[anio.selectedIndex].value;
        //leer el valor del radio button
        const tipo = document.querySelector('input[name="tipo"]:checked').value;
        //crear instancia de interfaz
        //en el caso de que lo deje en blanco mostramos un error
        const interfaz = new Interfaz();
        //revisamos que los campos no esten vacios
        if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
            //interfaz imprimiendo un error
            //cuando hicimos el new podemos usar el prototype
            interfaz.mostrarError('Faltan datos, revisa el formulario y crealo denuevo','error');
        }else{
            //instanciar seguro y mostrar interfaz
            const seguro = new Seguro(marcaSeleccionada,anioSeleccionado,tipo);
            //cotizar el seguro
            const cantidad = seguro.cotizarSeguro(seguro);
            interfaz.mostrarResultado(seguro, cantidad);
        }
    })
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
