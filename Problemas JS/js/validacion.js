function validar(formulario){
    if(!isNaN(formulario.cdinero.value)){
        var dinero=formulario.cdinero.value;
        var interes=dinero*0.02;
        alert("Por cada mes de inversión, usted obtendrá $"+interes+".")
        return true;
    }
    else{
        alert("Por favor ingrese un valor numérico");
        formulario.cdinero.focus();
        return false;
    }
}