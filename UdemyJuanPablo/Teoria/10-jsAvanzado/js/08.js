//composicion

const obetenerNombre = (info) => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})
function cliente(nombre,mail,empresa){
    let info = {
        nombre,
        mail,
        empresa
    }
    //ato el objeto a la funcion
    return Object.assign(
        info,
        obetenerNombre(info)
    );
}

function empleado(nombre,mail,puesto){
    let info = {
        nombre,
        mail,
        puesto
    }
    //ato el objeto a la funcion


    return Object.assign(
        info,
        obetenerNombre(info)
    );
}

const cl1 = new cliente('jose');
cl1.mostrarNombre();