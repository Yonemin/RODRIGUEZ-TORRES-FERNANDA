function funcion(formulario){
    if(!isNaN(formulario.total.value)){
        costo=parseFloat(formulario.total.value);
        des=costo*0.15;
        final=costo-des;
        alert("Usted tendrá que pagar "+final+".");
        return true;
    }
    else{
        alert("Por favor ingrese un valor numérico. Puede incluir decimales.");
        return false;
    }
}