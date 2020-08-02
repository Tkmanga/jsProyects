const restaurApp = {};

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburgesa',
        precio: 20
    },
    {
        platillo: 'Hot dog',
        precio: 25
    }
];

restaurApp.funciones = {
    ordenar: id => {
        console.log(` Tu platillo; ${restaurApp.platillos[id].platillo} se esta preparando`)
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menu: `);
        platillos.forEach((platillo, index) => {
            console.log(` ${index}: ${platillo.platillo} $ ${platillo.precio}`);
        })
    }
}
console.log(restaurApp.funciones)

const {platillos} = restaurApp;
//restaurApp.funciones.ordenar(1);
restaurApp.funciones.agregarPlatillo('dona','100')
restaurApp.funciones.mostrarMenu(platillos);