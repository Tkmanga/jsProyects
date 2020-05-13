document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click',cargarJSON);
document.getElementById('apiBTN').addEventListener('click',cargarREST);


function cargarTXT() {
    fetch('datos.txt')
        .then(function (res) {
            return res.text();
        })
        .then(function (empleados) {
            console.log(empleados);
            document.getElementById('resultado').innerHTML = empleados;
        })
        .then((function (error) {
            console.log(error);
        }))
}

function cargarJSON() {
    fetch('empleados.json')
        .then(function (res) {
            return res.json();
    })
        .then(function (data) {

            let html = '';
            data.forEach(function (empleado) {
                html += `
                <li>${empleado.nombre} ${empleado.puesto}</li>
            `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function (error) {
            console.log(error);
        })
}

function cargarREST() {
    console.log('asd')
    fetch('https://picsum.photos/v2/list')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let html = '';
            data.forEach(function (dato) {
                html += `
                    <li>
                        <a href="${dato.download_url}">Ver imagen</a>
                        ${dato.author}
                    </li>
                `;
            })
        })
        .catch(function (error) {
            console.log(error);
        })
}