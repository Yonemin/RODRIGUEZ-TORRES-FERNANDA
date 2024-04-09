function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function porcentajes(){
    var h=document.getElementById("hombres").value;
    var m=document.getElementById("mujeres").value;
    var ph=parseInt(h);
    var pm=parseInt(m);
    var total=ph+pm;
    porh=(ph*100)/total;
    porm=(pm*100)/total;
    document.getElementById("porc").value = porh+"% y "+porm+"%";
}

