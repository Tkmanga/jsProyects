let DB;

//selector de la interfaz

const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdministra = document.querySelector('#administra');

form.addEventListener('submit',agregarDatos);

function agregarDatos(e){
    e.preventDefault();
    console.log('presionado');
    const nuevaCita = {
        mascota: nombreMascota.value,
        cliente: nombreCliente.value,
        telefono: telefono.value,
        fecha: fecha.value,
        sintomas: sintomas.value,
        hora: hora.value
    }
    //en indexDB se utilizan las transacciones
    let transaction = DB.transaction(['citas'],'readwrite');
    let objectStore = transaction.objectStore('citas');
    //console.log(objectStore);
    let peticion = objectStore.add(nuevaCita);
    peticion.onsuccess = () => {
        form.reset();
    }

    transaction.oncomplete = () => {
        console.log('cita agregada');

        mostrarCitas();
    }

    transaction.onerror = ( ) => {
        console.log('hubo un error');
    }

}

function mostrarCitas (e) {
    // lo primero que voy hacer es limpiar las citas anteriores

    while (citas.firstChild) {
        citas.removeChild(citas.firstChild);
    }

    //creamos un object store

    let objectStore = DB.transaction('citas').objectStore('citas');

    // esto retorna una peticion

    objectStore.openCursor().onsuccess = function (e) {
        //cursosr se va ubicr en el registro indicado para acceder a los datos
        let cursor = e.target.result;

        if(cursor) {
            let citasHTML = document.createElement('li');
            citasHTML.setAttribute('data-cita-id', cursor.value.key);
            citasHTML.classList.add('list-group-item');
            citasHTML.innerHTML = `
                <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                <p class="font-weight-bold">Telefono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                <p class="font-weight-bold">Sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>`;


            const botonBorrar = document.createElement('button');
            botonBorrar.classList.add('borrar','btn','btn-danger');
            botonBorrar.innerHTML = `<span aria-hidden="true">X</span> Borrar`;
            botonBorrar.onclick = borrarCita;

            citasHTML.appendChild(botonBorrar);
            //apend en el padre
            citas.appendChild(citasHTML);
            cursor.continue();

        }else{
            //cuando no hay registros
            if(!citas.firstChild){
                headingAdministra.textContent = 'Agrega citas para comenzar';
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'no hay registros';
                citas.appendChild(listado);
            }else{
                headingAdministra.textContent = 'Administra tus citas';
            }
        }
    }

}

function borrarCita(e){

    let citaID = Number(e.target.parentElement.getAttribute('data-cita-id'));


    //en indexDB se utilizan las transacciones
    let transaction = DB.transaction(['citas'],'readwrite');
    let objectStore = transaction.objectStore('citas');
    //console.log(objectStore);
    let peticion = objectStore.delete(citaID);

    transaction.oncomplete = () => {
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
        //console.log('se elimino la cita con el id '+citaID);

        if(!citas.firstChild){
            headingAdministra.textContent = 'Agrega citas para comenzar';
            let listado = document.createElement('p');
            listado.classList.add('text-center');
            listado.textContent = 'no hay registros';
            citas.appendChild(listado);
        }else{
            headingAdministra.textContent = 'Administra tus citas';
        }
    }

}

// Esperar por el dom ready
document.addEventListener('DOMContentLoaded', () => {
    //creamos la base de datos
   let crearDB = window.indexedDB.open('citas',1);
    //si hay un error enviarlo a la consola

    crearDB.onerror = function (){
        console.log('error')
    }

    crearDB.onsuccess = function (){
        // console.log('tod ok');

        DB = crearDB.result;
        // console.log(DB);
        mostrarCitas();
    }

    //este metodo solo corre una vez y es ideal para crear el schema de la BD

    crearDB.onupgradeneeded = function (e){

        //el evento es la misma base de datos
        let db = e.target.result;

        //definir el objecstore, toma 2 parametros el nombre de la base de datos y segundo las opciones

        let objectStore = db.createObjectStore('citas',{keyPath: 'key', autoIncrement: true});

        //crear los indices y campos de la base de datos, create index: 3 parametros, nombre keypath y opciones



        objectStore.createIndex('mascota','mascota',{unique:false});
        objectStore.createIndex('cliente','mascota',{unique:false});
        objectStore.createIndex('telefono','mascota',{unique:false});
        objectStore.createIndex('fecha','mascota',{unique:false});
        objectStore.createIndex('sintomas','mascota',{unique:false});
        objectStore.createIndex('hora','mascota',{unique:false});
        console.log('bd creada y lista')
    }
});


