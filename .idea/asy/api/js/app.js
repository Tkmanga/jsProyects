document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click',cargarJSON);
document.getElementById('apiBTN').addEventListener('click',cargarREST);



function cargarTXT() {
    fetch('datos.txt',{mode: 'cors'})
        .then(function (res) {
            return res.text();
        })
        .then(function (empleados) {
            console.log(empleados);
            document.getElementById('response').innerHTML = empleados;
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
            document.getElementById('response').innerHTML = html;
        })
        .catch(function (error) {
            console.log(error);
        })
}

function cargarREST() {
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
            
            document.getElementById('response').innerHTML = html; 
        })
        .catch(function (error) {
            console.log(error);
        })
}

