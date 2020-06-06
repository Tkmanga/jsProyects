document.getElementById('cargar').addEventListener('click',cargarDatos);

function cargarDatos() {
    //creamos el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();
    //abrimos una conexion
    xhr.open('GET','datos.txt',true);

    /*
    //forma vieja
    xhr.onreadystatechange = function () {
        //
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
        };
    }
    //ready status
    /*
    * 0 - no inicializado
    * 1 - conexion establecida
    * 2- recibido
    * 3  procesando
    * 4 respuesta lista
    *
    */

    xhr.onload = function () {
        //200: correcto | 403: prohibido | 404: no encontrado

        if(this.status === 200){
            //forma nueva
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }

    }
    xhr.send();
}
