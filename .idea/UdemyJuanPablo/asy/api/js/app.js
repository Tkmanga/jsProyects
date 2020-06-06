document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click',cargarJSON);
document.getElementById('apiBTN').addEventListener('click',cargarREST);


//les pusimos en arrow functions para que se vea MEJOR y se entienda mas facil

function cargarTXT() {
    fetch('datos.txt',{mode: 'cors'})
        .then(res => res.text())
        .then(empleados => document.getElementById('response').innerHTML = empleados)
        .catch(error => console.log(error))
}

function cargarJSON() {
    fetch('empleados.json')
        .then(res => res.json())
        .then(data => {

            let html = '';
            data.forEach(function (empleado) {
                html += `
                <li>${empleado.nombre} ${empleado.puesto}</li>
            `;
            })
            document.getElementById('response').innerHTML = html;
        })
        .catch(error => console.log(error))
}

function cargarREST() {
    fetch('https://picsum.photos/v2/list')
        .then( res => res.json())
        .then(imagenes => {
            let html = '';
            imagenes.forEach(function (imagen) {
                html += `
                    <li>
                        <a href="${imagen.download_url}">Ver imagen</a>
                        ${imagen.author}
                    </li>
                `;
            })
            document.getElementById('response').innerHTML = html; 
        })
        .catch(error => console.log(error))
}

