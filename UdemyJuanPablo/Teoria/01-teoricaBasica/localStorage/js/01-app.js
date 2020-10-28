// CREAR
localStorage.setItem('nombre','juan'); // aunque recarge o cierre el valor siempre se va quedar

sessionStorage.setItem('nombre','masdkf'); // cuando se cierra el navegador se va esto

const producto = {
    nombre: 'tv',
    precio: 1200
}
const meses = ['enero','febrero','marzo']

const productoString = JSON.stringify(producto)
const mesesString = JSON.stringify(meses)

localStorage.setItem('producto',productoString)
localStorage.setItem('meses',mesesString)

// TRAER
const nombre = localStorage.getItem('nombre');
const productoRespuesta = JSON.parse(localStorage.getItem('producto'))
console.log(nombre); //si no existe el elemento te marca null
console.log(productoRespuesta)

// MODIFICAR


localStorage.removeItem('nombre');
//ACTUALIZAR UN REGISTRO

const mesesAr = JSON.parse(localStorage.getItem('meses'))
mesesAr.push('abril')
localStorage.setItem('meses',JSON.stringify(mesesAr))

//localStorage.clear() //limpia tode