function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calculo(){
    var ao=document.getElementById("anac").value;
    var parao=parseInt(ao);
    var resultado=2024-parao;
    document.getElementById("ed").value = resultado+" años.";
}