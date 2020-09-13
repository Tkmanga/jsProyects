//composicion

const obetenerNombre = (info) => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})

const guardarMail = (info) => ({
    guardarEmail(email){
        console.log(`Guardando email de: ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = (info) => ({
    mostrarEmail(){
        console.log(`Email: ${info.email}`);
    }
})

const obetenerPuesto = (info) => ({
    mostrarPuesto(){
        console.log(`El puesto es: ${info.puesto}`);
    }
})

const obtenerEmpresa = (info) => ({
    mostrarEmpresa(){
        console.log(`la empresa es ${info.empresa}`);
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
        obetenerNombre(info),
        guardarMail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
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
        obetenerNombre(info),
        guardarMail(info),
        obtenerEmail(info),
        obetenerPuesto(info)
    );
}

const cl1 = new cliente('jose',null,"leafnoise");
cl1.mostrarNombre();
cl1.guardarEmail('tacachojose@gmail.com');
cl1.mostrarEmail();
cl1.mostrarEmpresa();