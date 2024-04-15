/*
    Javascript es un lenguaje de programación multiparadigma.
    Acepta programación funcional, estructurada, POO, eventos.
    Dentro de JS no existe int, double, float, string, etc
    Para el manejo de variables con tipo de dato existe el estándar ES6, el cual nos dice que para el manejo de variables tenemos:
    - VAR
    - LET
    - CONST
*/

//vamos a hacer una función para comprobar que el campo nombre sea >3 caracteres

function validar(formulario){
    if(formulario.nombre.value.length < 4){
        alert("Por favor escribe más de 3 caracteres en el nombre");
        formulario.nombre.focus();
        return false;
    }
    var abcOK="qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    var checkStr=formulario.nombre.value;
    alert(checkStr);
    var allValido=true;
    //vamos a hacer un bucle mediante el cual primero obtenga la cadema del nombre y la separa en carácteres,
    //una vez tenga cada carácter debo de compararlo con la cadena que en este momento estoy considerando como la verdad absoluta
    //y si después de recorrer toda la cadena encuentro que el caracter no se encuentra envíe un error
    for(var i=0; i<checkStr.length; i++){
        var caracteres=checkStr.charAt(i);
        for(var j=0; j< abcOK.length; j++){
            if(caracteres==abcOK.charAt(j)){
                break;
            }
        }
        if(j==abcOK.length){
            allValido=false;
            break;
        }
    }
    if (!allValido){
        alert("Escriba únicamente letras en el campo del nombre.");
        formulario.nombre.focus();
        return false;
    }

    var abcOK="1234567890";
    var checkStr=formulario.edad.value;
    alert(checkStr);
    var allValido=true;
    for(var i=0; i<checkStr.length; i++){
        var caracteres=checkStr.charAt(i);
        for(var j=0; j< abcOK.length; j++){
            if(caracteres==abcOK.charAt(j)){
                break;
            }
        }
        if(j==abcOK.length){
            allValido=false;
            break;
        }
    }
    if (!allValido){
        alert("Escriba únicamente letras en el campo del nombre.");
        formulario.nombre.focus();
        return false;
    }

    //funcion para validar el correo es necesario contar con una expresión regular porque tenemos un formato el cual es:
    //texto.texto@texto.texto
    var b = /^[^@\s]+[^\.\s]+(\.[^@\.\s]+$)/;
    var txt = formulario.correo.value;
    alert("Email " + (b.test(txt)?"":" no ")+ " válido");
    return b.test;
}