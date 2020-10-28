//variables
const resultado = document.getElementById('resultado');
const year = document.getElementById('year');
const marca = document.getElementById('marca');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');
const max = new Date().getFullYear();
const min = max-10;


//generar un objeto con la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos); //muestra los automoviles al cargar

    llenarSelect();//llena los años
})

function mostrarAutos(autos){
    limpiarHTML(); //elimina los resultados de busquedas anteriores
    autos.forEach(auto =>{
        const {marca,modelo,year,transmision,puertas,precio,color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision ${transmision} - Precio: $${precio} - color: ${color}`;
        //insertar HTML al final
        resultado.appendChild(autoHTML)
    })
}

function llenarSelect(){
    for(let i = max; i>= min; i--){
        const newYear = document.createElement('option')
        newYear.value = i;
        newYear.textContent = i;
        year.appendChild(newYear); //Agrega las opciones de año al select

    }
}

//event lisener para los selects

marca.addEventListener('change',(e)=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto()
})

minimo.addEventListener('change',e => {
    datosBusqueda.minimo = parseInt(e.target.value);
    console.warn(datosBusqueda)
    filtrarAuto()

})

maximo.addEventListener('change',e => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto()
})

year.addEventListener('change',e =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto()

})

puertas.addEventListener('change',e=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto()

})

transmision.addEventListener('change',e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto()

})

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto()

})

//higer order function

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    resultado.length?mostrarAutos(resultado):noResultado();
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca
    }
    return auto;
}

function filtrarYear(auto){
    const { year } = datosBusqueda;
    if( year ){
        return auto.year === year
    }
    return auto;
}
function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    if( minimo ){
        return auto.precio >= minimo
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;
    if( maximo ){
        return auto.precio <= maximo
    }
    return auto;
}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if( puertas ){
        return auto.puertas === puertas
    }
    return auto;
}


function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if( transmision ){
        return auto.transmision === transmision
    }
    return auto;
}

function filtrarColor(auto){
    const { color } = datosBusqueda;
    if( color ){
        return auto.color === color
    }
    return auto;
}

function noResultado(){
    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultados';
    limpiarHTML()
    resultado.appendChild(noResultado);
}


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}