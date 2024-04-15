//vamos a crear una función que se encargue de poder validar que existan unicamente numeros dentro del campo de inversión
//e=event, keyCode=solo lo que viene de parte del teclado
//después de " : " es si es verdadero
//el identidicador se puede llamar de UNA sola forma, los nombres se pueden repetir, class es exclusivo de css

function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function interes(){
    var valor = document.getElementById("cantidadi").value;
    var parseo = parseFloat(valor);
    var interes = parseo*(0.037/12);
    var total = interes + parseo;
    document.getElementById("sueldoi").value = "$" + total;
}

function borrar(){
    document.getElementById("cantidadi").value = "";
    document.getElementById("sueldoi").value = "";
}