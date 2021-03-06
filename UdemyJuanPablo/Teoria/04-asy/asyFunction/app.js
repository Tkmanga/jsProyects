

async function obtenerClientes () {
    //crear un promise
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Clientes descargados...`);
        }, 2000);
    });

    const error = false;
    //error o no
    if (!error) {
        const respuesta = await clientes;
        return respuesta;
    } else {
        await Promise.reject(`Hubo un error`);
    }
}

obtenerClientes()
    .then(res=>console.log(res))
    .catch(error => console.log(error));