//window binding

function obtenerAuto(){
    console.log(`mi auto es de color ${this.color}`);
}

const color = 'Negro'; //undefinded
window.color = 'Negro'; //color negro

//esto funciono ya que al no encontrarlo en los parametros seteados, directamente va elevando el rango de busqueda llegando al "window"

obtenerAuto();