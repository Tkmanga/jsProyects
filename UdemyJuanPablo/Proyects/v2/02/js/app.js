//variables
const resultado = document.getElementById('resultado');


document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos();
})

function mostrarAutos(){
    autos.forEach(auto =>{
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${auto.marca}`;
        //insertar HTML al final
        resultado.appendChild(autoHTML)
    })
}