//variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const btnReset = document.getElementById('resetBtn');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventsListeners();

function eventsListeners(){
    document.addEventListener('DOMContentLoaded',iniciarApp);

    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

    //
    formulario.addEventListener('submit',enviarEmail);


    btnReset.addEventListener('click',resetearFormulario);

}

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

function validarFormulario(e){

   if(e.target.value.length > 0){

       //elimina los errores

       const error = document.querySelector('.error');
       if(error){
           error.remove();

       }
       
       e.target.classList.remove('border','border-red-500');
       e.target.classList.add('border','border-green-500');
   }else{
    e.target.classList.add('border','border-red-500');
    mostrarError('todos los campos son obligatorios');
   }

   if(e.target.type === 'email'){
       if(er.test(e.target.value)){
           const error = document.querySelector('.error');
           if(error){
               error.remove();

           }

           e.target.classList.remove('border','border-red-500');
           e.target.classList.add('border','border-green-500');
       }else{
           e.target.classList.remove('border','border-green-500');
           e.target.classList.add('border','border-red-500');
            mostrarError('Email no valido');
       }
   }

   if(er.test(email.value) && mensaje.value !== '' && asunto.value !== ''){
       btnEnviar.disabled = false;
       btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
   }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = `${mensaje}`;
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500', 'p-3','mt-5','text-center','error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0 ){
        formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
    }
}

function enviarEmail(e){
    e.preventDefault();
    //mostrar spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(()=>{
        spinner.style.display = 'none';
        const parrafo = document.createElement('p');
        parrafo.classList.add('text-center','my-10','p-2','bg-green-500','text-white','font-bold')

        parrafo.textContent = 'el mensaje se envio correctamente';

        formulario.insertBefore(parrafo, spinner);

        setTimeout(()=>{
            parrafo.remove();
            resetearFormulario();
        },5000); 
    }, 3000);

}

function resetearFormulario () {
  formulario.reset();
  iniciarApp();
  
}






