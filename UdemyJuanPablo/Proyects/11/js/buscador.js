// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

//globales
const autos = obtenerAutos();
let datosBusqueda ={
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// add event lisenert
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);
})
//event lisener para formulario
const marca = document.querySelector('#marca');
marca.addEventListener('input', e =>{
    datosBusqueda.marca = e.target.value;
    //llamar a la funcion filtrar   datos
    filtrarAuto();
});


const year = document.querySelector('#year');
year.addEventListener('input', e =>{
    datosBusqueda.year = Number(e.target.value);
    //llamar a la funcion filtrar datos
    filtrarAuto();
});

function filtrarAuto(){
    const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear);
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        alert('no hay resultado');
    }
}

function filtrarMarca(auto){

    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }else{
        return auto;
    }
}




function filtrarYear(auto){

    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }else{
        return auto;
    }
}

function obtenerAutos(){
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 10,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}

function  mostrarAutos(autos){
    //leer el elemento resultado
    const resultado = document.querySelector('#resultado');
    //limpiar los resultados anteriores
    while (resultado.firstChild){
        //mientras el div resultado leido tenga hijos los vamos limpiando hasta que no quede nada
        resultado.removeChild(resultado.firstChild);
    }
    //ahora agregamos los autos leidos
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `<p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmision: ${auto.transmision} - Precio: ${auto.precio} - Color ${auto.color}</p>`;
        resultado.appendChild(autoHTML);
    });
}

