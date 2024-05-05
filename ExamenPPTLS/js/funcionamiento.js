/*Funciones q comoq ocupo, * las más importantes
*- El juego inicia al dar click en el botón
*- El sistema espera 5 segundos entre cada movimiento para TEÓRICAMENTE tengan tiempo d decidir
*- El sistema reconoce q opción eligió cada jugador
*- El sistema les da 1-2 segundos a los jugadores para elegir [será mejor definido con el playtesting],
si tardan más se invalida su turno
- El sistema mostrará en pantalla una imagen con la opción elegida
*- En base a la opción que elijan, el sistema debe comparar lo que eligió cada juagdor y darle su punto a quien corresponda
*- Si se obtiene un punto, el sistema debe agregar el puntaje correspondido al que se lo haya ganado
*- El sistema debe de mostrar en pantalla el puntaje de cada jugador y actualizarlo después de cada ronda
*- El sistema debe terminar el juego después de las 3 rondas establecidas
*- El sistema debe reconocer cuál jugador ganó
*- El sistema debe reflejar en pantalla quién ganó y quién perdió
*/

var PuntajeP1=0;
var PuntajeP2=0;
var masPuntajeP1 = 0;
var masPuntajeP2 = 0;
var jugadaP1=0;
var jugadaP2=0;
var opciones = new Array( 1, 2, 3, 4, 5);

function obtenerValores(){
    jugadaP1 = document.querySelector('#p1-input').value;
    alert("Jugada P1 "+jugadaP1)
}

function compararJugadas_1(){
    alert("entra")
    var rnd = Math.random();
    jugadaP2 = Math.floor(rnd*(opciones.length));
    alert("Jugada P2 "+jugadaP2)
    if(document.querySelector('#p1-input').value=="1"){
        if(jugadaP2=="0"){
            alert(Empate)
        }else if(jugadaP2=="1"){
            PuntajeP2=PuntajeP2+1;
            document.querySelector('#p2-output').textContent = 'Puntuación: '+PuntajeP2;
        }else if(jugadaP2=="2"){
            PuntajeP1+=1;
            document.querySelector('#p1-output').textContent = 'Puntuación: '+PuntajeP1;
        }else if(jugadaP2=="3"){
            PuntajeP1=PuntajeP1+1;
            document.querySelector('#p1-output').textContent = 'Puntuación: '+PuntajeP1;
        }else if(jugadaP2=="4"){
            PuntajeP2=PuntajeP2+1;
            document.querySelector('#p2-output').textContent = 'Puntuación: '+PuntajeP2;
        }
    }else if(document.querySelector('#p1-input').value == "2"){
        compararJugadas_2(jugadaP2);
    }else if(document.querySelector('#p1-input').value == "3"){
        compararJugadas_3(jugadaP2);
    }else if(document.querySelector('#p1-input').value == "4"){
        compararJugadas_4(jugadaP2);
    }else if(document.querySelector('#p1-input').value == "5"){
        compararJugadas_5(jugadaP2);
    }else if(document.querySelector('#p1-input').value < 1 || document.querySelector('#p1-input').value > 5){
        alert("Jugada inválida")
    }else{
        alert("Jugada inválida")
    }
}

/*
function mostrarEleccionP1(){
    document.body.onkeydown=(function(evento){
        if(evento.which===codigosDireccion.ARRIBA || evento.which===codigosDireccion.ABAJO || evento.which===codigosDireccion.IZQUIERDA || evento.which===codigosDireccion.DERECHA){

        }
    })
}*/

function compararJugadas_2(){
        if(jugadaP2=="0"){
            PuntajeP1+=1;
            document.querySelector('#p1-output').textContent = 'Puntuación: '+PuntajeP1;
        }else if(jugadaP2=="1"){
            document.querySelector('#p1-invalido').textContent = 'Empate';
            document.querySelector('#p2-invalido').textContent = 'Empate';
        }else if(jugadaP2=="2"){
            PuntajeP2=PuntajeP2+1;
            document.querySelector('#p2-output').textContent = 'Puntuación: '+PuntajeP2;
        }else if(jugadaP2=="3"){
            PuntajeP2=PuntajeP2+1;
            document.querySelector('#p2-output').textContent = 'Puntuación: '+PuntajeP2;
        }else if(jugadaP2=="4"){
            PuntajeP1+=1;
            document.querySelector('#p1-output').textContent = 'Puntuación: '+PuntajeP1;
        }else{
            alert("Jugada inválida")
        }
}

function compararJugadas_3(){
        if(jugadaP2=="0"){
            PuntajeP2=PuntajeP2+1;
            document.querySelector('#p2-output').textContent = 'Puntuación: '+PuntajeP2;
        }else if(jugadaP2=="1"){
            PuntajeP1+=1;
            document.querySelector('#p1-output').textContent = 'Puntuación: '+PuntajeP1;
        }else if(jugadaP2=="2"){
            document.querySelector('#p1-invalido').textContent = 'Empate';
            document.querySelector('#p2-invalido').textContent = 'Empate';
        }else if(jugadaP2=="3"){
            PuntajeP1+=1;
            document.querySelector('#p1-output').textContent = 'Puntuación: '+PuntajeP1;
        }else if(jugadaP2=="4"){
            PuntajeP2=PuntajeP2+1;
            document.querySelector('#p2-output').textContent = 'Puntuación: '+PuntajeP2;
        }else{
            alert("Jugada inválida")
        }
}

function compararJugadas_4(){
        if(jugadaP2=="0"){
            PuntajeP2=PuntajeP2+1;
            document.querySelector('#p2-output').textContent = 'Puntuación: '+PuntajeP2;
        }else if(jugadaP2=="1"){
            PuntajeP1+=1;
            document.querySelector('#p1-output').textContent = 'Puntuación: '+PuntajeP1;
        }else if(jugadaP2=="2"){
            PuntajeP2=PuntajeP2+1;
            document.querySelector('#p2-output').textContent = 'Puntuación: '+PuntajeP2;
        }else if(jugadaP2=="3"){
            document.querySelector('#p1-invalido').textContent = 'Empate';
            document.querySelector('#p2-invalido').textContent = 'Empate';
        }else if(jugadaP2=="4"){
            PuntajeP1+=1;
            document.querySelector('#p1-output').textContent = 'Puntuación: '+PuntajeP1;
        }else{
            alert("Jugada inválida")
        }
}

function compararJugadas_5(){
    alert("entra de")
        if(jugadaP2=="0"){
            PuntajeP1+=1;
            document.querySelector('#p1-output').textContent = 'Puntuación: '+PuntajeP1;
        }else if(jugadaP2=="1"){
            PuntajeP2=PuntajeP2+1;
            document.querySelector('#p2-output').textContent = 'Puntuación: '+PuntajeP2;
        }else if(jugadaP2=="2"){
            PuntajeP1+=1;
            document.querySelector('#p1-output').textContent = 'Puntuación: '+PuntajeP1;
        }else if(jugadaP2=="3"){
            PuntajeP2=PuntajeP2+1;
            document.querySelector('#p2-output').textContent = 'Puntuación: '+PuntajeP2;
        }else if(jugadaP2=="4"){
            document.querySelector('#p1-invalido').textContent = 'Empate';
            document.querySelector('#p2-invalido').textContent = 'Empate';
        }else{
            alert("Jugada inválida")
        }
}

function tiempoEspera(){
    tresSegundos();
    setTimeout(dosSegundos, 1000);
    setTimeout(unSegundo, 2000)
    setTimeout(ceroSegundos,3000);
    setTimeout(obtenerValores, 5000);
    setTimeout(Espera, 5000);
    setTimeout(compararJugadas_1, 6000);
}

function tresSegundos(){
    document.querySelector('#SigRonda').textContent = `Siguiente ronda en 3`
}
function dosSegundos(){
    document.querySelector('#SigRonda').textContent = `Siguiente ronda en 2`
}
function unSegundo(){
    document.querySelector('#SigRonda').textContent = `Siguiente ronda en 1`
}
function ceroSegundos(){
    document.querySelector('#SigRonda').textContent = `¡AHORA!`
}
function Espera(){
    document.querySelector('#SigRonda').textContent = `Espera...`
}