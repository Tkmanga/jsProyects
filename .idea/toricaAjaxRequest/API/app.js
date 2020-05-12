const cargarPost = document.querySelector('#cargar').addEventListener('click',cargarAPI);

function cargarAPI() {
    //crear vinculo
    const xhr = new XMLHttpRequest();
    //abrir conexion
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
    //cargar y leer datos
    xhr.onload = function () {
        if(this.status === 200){
            const respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function (post) {
                console.log('asd');
                contenido +=
                    `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
            });

            document.getElementById('listado').innerHTML = contenido;
        }

    }
    //enviamos la conexion
    xhr.send();
}