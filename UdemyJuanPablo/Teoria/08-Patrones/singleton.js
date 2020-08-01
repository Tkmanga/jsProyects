const alumnos = {
    //todos los alumnos
    listaAlumnos: [],

    //obtener un alumno
    get: function (id){
        //console.log(id);
        return this.listaAlumnos[id];
    },
    //crear un alumno
    crear: function (datos){
        //console.log(datos);
        this.listaAlumnos.push(datos);
    },
    //lista alumnos
    listado: function (){
        return this.listaAlumnos;
    }
}

const infoAlumno = {
    nombre: 'juan',
    edad: 20
}
const infoAlumno2 = {
    nombre: 'Pablo',
    edad: 21
}

 alumnos.crear(infoAlumno);
 alumnos.crear(infoAlumno2);
const listado = alumnos.listado();
console.log(listado);
console.log(alumnos.get(0));