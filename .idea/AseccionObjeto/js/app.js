const cliente = {
    nombre: 'Juan',
    saldo: 200,
    tipoCliente: function () {
        let tipo;
        if (saldo>1000){
            tipo='gold';
        }else{
            tipo='normal';
        }
        return tipo;
    }
}