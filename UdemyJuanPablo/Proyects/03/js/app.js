//aca se uso el framework materalize !!
//simulador envio de mail
/*
* Si los campos de para, asunto y mensaje estan vacios, el mail no puede enviarse y los campos deberan mostrarse en rojo
*
* debe existir un boton para borrar t*do el contenido del formulario
*
* al presionar el boton enviar, un spinner de carga debera mostrarse
*
* despues del spinner un grafico de enviado debera mistrarse
*
*
* */
//variables para campos
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje  = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

//llamas al metodo

eventListeners();

//event listeners
function eventListeners() {
    //inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded',inicioApp);
    //campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

    //boton enviar en el submit
    btnEnviar.addEventListener('click',validarFormulario);
    resetBtn.addEventListener('click',resetarForm);
}
//resetear el formulario
function resetarForm(e) {
    formularioEnviar.reset();
    e.preventDefault();
}

//function

function inicioApp() {
    //deshabilitar el envio
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

function validarFormulario(e){
    if(e.target.value.length > 0){
        console.log('hay algo');
    }else{
        e.target.style.borderBottomColor = 'red';
        e.target.classList.add('border','border-red-500')  ;

    }
}
/*
//valida que el campo tenga algo escrito
function validarCampo() {
    //se valida la longitud del texto y que no este vacio
    validarLongitud(this);
    //validar unicamente el email
    if(this.type === 'email'){
        validarEmail(this);
    }
    //habilito el voton si los 3 campos no estan vacios
    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if (errores.length ===0){
            btnEnviar.disabled = false;
        }

    }
}
// cuando se envia el correo
function enviarEmail(e) {

    //spinner al precionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //gif que envia mail
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //ocultar spinner y mostrar gif de enviado
    setTimeout(function () {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function () {
            enviado.remove();
            formularioEnviar.reset();

        },3000)
    },1500);

    e.preventDefault();

}
function validarLongitud(campo) {
    if (campo.value.length >0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }

}

function validarEmail(campo) {
    const mensaje = campo.value;
    //el -1 quiere decir si la encontro si pusieramos 1 es el caso que no la haya encontrado
    if(mensaje.indexOf('@')!== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

 */