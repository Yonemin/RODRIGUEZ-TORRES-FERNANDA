/*Funciones q comoq ocupo, * las más importantes
*- El juego inicia al dar click en el botón
*- El sistema espera 5 segundos entre cada movimiento para TEÓRICAMENTE tengan tiempo d decidir
*- El sistema reconoce q opción eligió cada jugador
*- El sistema les da 1-2 segundos a los jugadores para elegir [será mejor definido con el playtesting],
si tardan más se invalida su turno
- El sistema mostrará en pantalla una imagen con la opción elegida
*- En base a la opción que elijan, el sistema debe comparar lo que eligió cada juagdor y darle su punto a quien corresponda
*- Si se obtiene un punto, el sistema debe agregar el puntaje correspondido al que se lo haya ganado
- El sistema debe de mostrar en pantalla el puntaje de cada jugador y actualizarlo después de cada ronda
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

function obtenerValores(){
    jugadaP1 = document.querySelector('#p1-input').value;
    jugadaP2 = document.querySelector('#p2-input').value;
    alert(jugadaP1)
    alert(jugadaP2)
    if(jugadaP1===null){
        alert("Jugador 1, jugada inválida")
    }else if(jugadaP2=0 || jugadaP2===null){
        alert("Jugador 2, jugada inválida")
    }else{
        compararJugadas(jugadaP1, jugadaP2);
    }
}

function compararJugadas(){
        switch(jugadaP1){
            case jugadaP1='w':
                if(jugadaP2=7){
                    masPuntajeP1=0;
                    masPuntajeP2=0;
                }else if(jugadaP2=8){
                    masPuntajeP1=1;
                    masPuntajeP2=1;
                }else if(jugadaP2=4){
                    masPuntajeP1=1;
                    masPuntajeP2=0;
                }else if(jugadaP2=5){
                    masPuntajeP1=1;
                    masPuntajeP2=0;
                }else if(jugadaP2=1){
                    masPuntajeP1=0;
                    masPuntajeP2=1;
                }else {
                    mostrarEntradaInvalida(jugadaP1, jugadaP2);
                }
                break;
            case jugadaP1='a':
                if(jugadaP2=7){
                    masPuntajeP1=1;
                    masPuntajeP2=0;
                }else if(jugadaP2=8){
                    masPuntajeP1=0;
                    masPuntajeP2=0;
                }else if(jugadaP2=4){
                    masPuntajeP1=0;
                    masPuntajeP2=1;
                }else if(jugadaP2=5){
                    masPuntajeP1=0;
                    masPuntajeP2=1;
                }else if(jugadaP2=1){
                    masPuntajeP1=1;
                    masPuntajeP2=0;
                }else {
                    mostrarEntradaInvalida(jugadaP1, jugadaP2);
                }
                break;
            case jugadaP1='s':
                if(jugadaP2=7){
                    masPuntajeP1=0;
                    masPuntajeP2=1;
                }else if(jugadaP2=8){
                    masPuntajeP1=1;
                    masPuntajeP2=0;
                }else if(jugadaP2=4){
                    masPuntajeP1=0;
                    masPuntajeP2=0;
                }else if(jugadaP2=5){
                    masPuntajeP1=1;
                    masPuntajeP2=0;
                }else if(jugadaP2=1){
                    masPuntajeP1=0;
                    masPuntajeP2=1;
                }else {
                    mostrarEntradaInvalida(jugadaP1, jugadaP2);
                }
                break;
            case jugadaP1='d':
                if(jugadaP2=7){
                    masPuntajeP1=0;
                    masPuntajeP2=1;
                }else if(jugadaP2=8){
                    masPuntajeP1=1;
                    masPuntajeP2=0;
                }else if(jugadaP2=4){
                    masPuntajeP1=0;
                    masPuntajeP2=1;
                }else if(jugadaP2=5){
                    masPuntajeP1=0;
                    masPuntajeP2=0;
                }else if(jugadaP2=1){
                    masPuntajeP1=1;
                    masPuntajeP2=0;
                }else {
                    mostrarEntradaInvalida(jugadaP1, jugadaP2);
                }
                break;
            case jugadaP1='z':
                if(jugadaP2=7){
                    masPuntajeP1=1;
                    masPuntajeP2=0;
                }else if(jugadaP2=8){
                    masPuntajeP1=0;
                    masPuntajeP2=1;
                }else if(jugadaP2=4){
                    masPuntajeP1=1;
                    masPuntajeP2=0;
                }else if(jugadaP2=5){
                    masPuntajeP1=0;
                    masPuntajeP2=1;
                }else if(jugadaP2=1){
                    masPuntajeP1=0;
                    masPuntajeP2=0;
                }else {
                    mostrarEntradaInvalida(jugadaP1, jugadaP2);
                }
                break;
                case jugadaP1===null:
                    alert("Jugada inválida")
                    break;
            default:
                mostrarEntradaInvalida(jugadaP1, jugadaP2);
                break;
        }
        alert(masPuntajeP1);
        alert(masPuntajeP2);
        agregarPuntos(masPuntajeP1, masPuntajeP2);
}

function mostrarEntradaInvalida(){
    if(jugadaP1!='w' || jugadaP1!='a' || jugadaP1!='s' || jugadaP1!='d' || jugadaP1!='z'){
        alert("Jugada inválida")
    }else if(jugadaP2!=8 || jugadaP2!=7 || jugadaP2!=4 || jugadaP2!=5 || jugadaP2!=1){
        alert("Jugada inválida")
    }else if(jugadaP1 === null){
        alert("Jugada inválida")
    }else if(jugadaP2 === null){
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

PuntajeP1=0;
PuntajeP2=0;

function agregarPuntos(){
    alert(masPuntajeP1)
    alert(masPuntajeP2)
    if((masPuntajeP1=1) && (masPuntajeP2=0)){
        PuntajeP1+=1;
        document.querySelector('#p1-output').textContent = `Puntuación: `+PuntajeP1;
    }else if((masPuntajeP1=0) && (masPuntajeP2=1)){
        PuntajeP2+=1;
        document.querySelector('#p2-output').textContent = `Puntuación: `+PuntajeP2;
    }
    return PuntajeP1, PuntajeP2;
}

function tiempoEspera(){
    tresSegundos();
    setTimeout(dosSegundos, 1000);
    setTimeout(unSegundo, 2000)
    setTimeout(ceroSegundos,3000);
    setTimeout(obtenerValores, 8000);;
    setTimeout(Espera, 8000);
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
    alert(jugadaP1)
    alert(jugadaP2)
}