//variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //cuando agregar un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click',agregarCurso);
    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);
    //muestra los cursos del localStorage
    document.addEventListener('DOMContentLoaded',()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('Articulos')) || [];

        carritoHTML();
    })

    //vaciar carrito
    vaciarCarrito.addEventListener('click',eliminarTodos);
}

//funciones

function agregarCurso(e){
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}
//elimina un curso del carrito

function eliminarCurso(evt){
    if(evt.target.classList.contains('borrar-curso')){
        const cursoId = evt.target.getAttribute('data-id');

        //elimina del arrelgo de articulsoCarrito por el data-id

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId); //atento a la condicion que al ser negativa excluye la que corresponde

        limpiarHTML();
    }
}

//vaciar carrito

function eliminarTodos(){
    articulosCarrito = [];
    carritoHTML(); 
}
//lee el contenido del html que hicimos click y extrae la informacion del curso

function leerDatosCurso (curso){

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('H4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //revisa si un elemento ya existe en el carrito

    const articuloExiste = articulosCarrito.some(curso => curso.id === infoCurso.id);


    if(articuloExiste){
        //actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
               curso.cantidad++; //retorna objeto actualizados
               return curso;
            }else{
                return curso; //retorna objetos no actualizados 
            }
        })
    }else{
        //agrega elementos al arreglo de carrito

        //articulosCarrito.push(infoCurso); //una opcion

        articulosCarrito = [...articulosCarrito, infoCurso]; //usamos spread opeartor y no olvidamos de traer los cursos ya agregados

    }

    carritoHTML();
}

function agregarAlLocalS(){
    const carritoString = JSON.stringify(articulosCarrito)
    localStorage.setItem('Articulos', carritoString);
}

//muestra el carrito de compras en el html

function carritoHTML(){

    //limpiar el html
    limpiarHTML();



    //recorre el carrito y genera el html
    articulosCarrito.forEach(curso => {
       //destructoring de objeto
       const {imagen, titulo, precio, cantidad, id } = curso;
       //como dentro del carrito hay un tbody tenemos que crear un trow
       const row = document.createElement('tr');
       row.innerHTML = `
        <td>
            <img src="${imagen}" width="100">
        </td>
        <td>
            ${titulo}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
       `;

       //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
    agregarAlLocalS();
}

function  limpiarHTML () {
    //contenedorCarrito.innerHTML = '';   //forma lenta de limpiar

    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        //suponiendo que queremos limpiar el carrito este bucle hace q mientras haya un hijo lo elimina
    };


}
