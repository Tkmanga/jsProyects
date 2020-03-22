//variables
const carrito = document.getElementById('carrito');
const galeriaCurso = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBTN = document.getElementById('vaciar-carrito');
//listeners
cargarEventListeners();
function cargarEventListeners() {
    //dispara cuando se precionsa "agregar carrito"
    galeriaCurso.addEventListener('click',comprarCursos);
    //cuando se elimina un curso del carrito
    carrito.addEventListener('click',eliminarCurso);
    //vaciar carrito
    vaciarCarritoBTN.addEventListener('click',vaciarCarrito);
    //al cargar el documento vamos a traer los datos de localstorage
    document.addEventListener('DOMContentLoaded',leerLocalStorage);
}


//funciones
//function que añade el curso al carrito
function comprarCursos(e) {
    e.preventDefault();
    //delegation para agregar carrito
    if (e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        //enviamos el curso selecionado para cargar sus datos
        leerDatosCurso(curso);
    }
}

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoCurso); 
    
}

function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100" alt="">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X</a>    
        </td>
    `;

    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}
//elimina el curso seleccionado en el dom
function eliminarCurso(e) {
    e.preventDefault();
    let curso;
    let id;
    if (e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        id = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursoDeLs(id);
}
//elimina los cursos del carrito en el dom
function vaciarCarrito(e) {
    //forma lenta
    //listaCursos.innerHTML = '';
    //forma rapida (recomendada)
    while (listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    //vaciar local storage
    vaciarLocalStorage();
    return false; //para que no salte tanto en el inner o en el while
}
//elimina todos los cursos de local storage
function vaciarLocalStorage() {
    localStorage.clear();
}

//
function guardarCursoLocalStorage(curso){
    //toma el valor de un arreglo vacio o con datos del LS
    let cursos = obtenerCursosLocalStorage();

    //el curso seleccionado se agrega al arreglo
    cursos.push(curso);
    localStorage.setItem('cursos',JSON.stringify(cursos));
}

function obtenerCursosLocalStorage(){
    let cursoSLS;
    if (localStorage.getItem('cursos')===null){
        cursoSLS = [];
    }else {
        cursoSLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursoSLS;
}

function leerLocalStorage() {
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    cursosLS.forEach(function (curso) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100" alt="">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X</a>    
        </td>
    `;

        listaCursos.appendChild(row);
    })
}

function eliminarCursoDeLs(id){
    //obteenmos el arreglo del curso
    let cursosLS = obtenerCursosLocalStorage();
    //recorremos buscando en el arreglo el que coincida con el id
    cursosLS.forEach(function (cursos,index) {
        //condicionamos para eliminar
        if (cursos.id === id){
            cursosLS.splice(index,1);
        }
    })
    //pisamos el arreglo anterior para eliminarlo
    localStorage.setItem('cursos',JSON.stringify(cursosLS));
}
