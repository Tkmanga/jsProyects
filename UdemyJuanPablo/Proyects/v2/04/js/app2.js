function Seguro(marca, anios, tipo){
    this.marca = marca;
    this.anios = anios;
    this.tipo = tipo;
}

function UI(){

}

UI.prototype.mostrarResultado = (seguro,total) => {
    const div = document.createElement('div');
    const {marca,anios,tipo} = seguro;
    console.log(seguro);
    switch (marca) {
        case '1':
            textoMarca = 'Americano'
            break;
        case '2':
            textoMarca = 'Asiatico'
            break;
        case '3':
            textoMarca = 'Europeo'
            break;
    }
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Total: <span class="font-normal"> $ ${total}</span></p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal"> ${anios}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal"> ${tipo}</span></p>
        
    `;

    const resultadoDiv = document.querySelector('#resultado');


    //mostrar spinner

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';


    setTimeout(()=>{
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    },3000)
}
Seguro.prototype.cotizar = function (){
    /*
    *
    *
    *
    * */
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base *1.15;
            break;
        case '2':
            cantidad = base *1.05;

            break;
        case '3':
            cantidad = base *1.35;

            break;

        default:
            break;
    }
    //leemos el año
    const diferencia = new Date().getFullYear() - this.anios;

    // por cada año se le aumenta un %3
    cantidad -= ( ( diferencia * 3 ) * cantidad ) / 100;

    // si es basico o mas
    if(this.tipo == 'basico'){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    return cantidad;
}
UI.prototype.mostrarMensaje = (mensaje,tipo) =>{
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }
    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;
    //insertar HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div,document.querySelector('#resultado'));
    setTimeout(() =>{
            div.remove();
    },3000)
}
//llenar las opciones del usuario

UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max-20;
    const selectYear = document.querySelector('#anio');
    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

const ui = new UI();

document.addEventListener('DOMContentLoaded',()=>{
    ui.llenarOpciones();
});

eventsListeners();
//los selectores no conviene ponerlos en prototype
function eventsListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',cotizarSeguro);

}
function cotizarSeguro(e){

    e.preventDefault();

    //leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //leer el año seleccinado
    const anio = document.querySelector('#anio').value;

    //leer el tipo de covertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    const resultados = document.querySelector('#resultado div');

    if(resultados != null){
        resultados.remove();
    }

    if(marca ==='' || anio === '' || tipo ===''){
        ui.mostrarMensaje('Todos los campos son obligatorios','error');
        return;
    }else{
        ui.mostrarMensaje('Cotizando...','exito');
        //instanciar el seguro
        const seguro = new Seguro(marca,anio,tipo);
        const total = seguro.cotizar();
        //utilizar el prototype
        ui.mostrarResultado(seguro,total);
    }
}