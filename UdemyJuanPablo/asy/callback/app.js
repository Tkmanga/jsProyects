const ciudades = ['londres','new york','barcelona','paris','viena'];

/*
ciudades.forEach(function (ciudad) {
    console.log(ciudad)
});
*/

//con funcion definida
/*
//callbacks
function callback(ciudad) {
    console.log(ciudad);
}

ciudades.forEach(callback);
 */

const paises = ['paris','españa','portugal','australia','inglaterra','irlanda'];

//se agrega un pais despues de 2 segundos
function nuevoPais(pais,callback) {
    setTimeout(function () {
        paises.push(pais);
        callback();
    },2000)
}


//los paises se muestran despues de un segundo
function mostrarPaises() {
    setTimeout(function () {
        let html='';
        paises.forEach(function (pais) {
            html += `<li> ${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    },1000);
}

nuevoPais('argentina',mostrarPaises);

mostrarPaises();