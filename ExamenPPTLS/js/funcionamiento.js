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

var codjugadap1 = {
    PIEDRA: 119,
    PAPEL: 97,
    TIJERA: 115,
    LAGARTO: 100,
    SPOCK:122
};

var codjugadap2 = {
    PIEDRA: 55,
    PAPEL: 56,
    TIJERA: 52,
    LAGARTO: 53,
    SPOCK:49
};

/*Combinaciones posibles*/
var P1P2Empate_1 = (evento.which === codjugadap1.PIEDRA) && (codjugadap2.PIEDRA);
var P1P2Empate_2 = (evento.which === codjugadap1.PAPEL) && (codjugadap2.PAPEL);
var P1P2Empate_3 = (evento.which === codjugadap1.TIJERA) && (codjugadap2.TIJERA);
var P1P2Empate_4 = (evento.which === codjugadap1.LAGARTO) && (codjugadap2.LAGARTO);
var P1P2Empate_5 = (evento.which === codjugadap1.SPOCK) && (codjugadap2.SPOCK);

var P1GanP2Pier_1 = (evento.which === codjugadap1.PIEDRA) && (codjugadap2.TIJERA);
var P1GanP2Pier_2 = (evento.which === codjugadap1.TIJERA) && (codjugadap2.PAPEL);
var P1GanP2Pier_3 = (evento.which === codjugadap1.PAPEL) && (codjugadap2.PIEDRA);
var P1GanP2Pier_4 = (evento.which === codjugadap1.PIEDRA) && (codjugadap2.LAGARTO);
var P1GanP2Pier_5 = (evento.which === codjugadap1.LAGARTO) && (codjugadap2.SPOCK);
var P1GanP2Pier_6 = (evento.which === codjugadap1.SPOCK) && (codjugadap2.TIJERA);
var P1GanP2Pier_7 = (evento.which === codjugadap1.TIJERA) && (codjugadap2.LAGARTO);
var P1GanP2Pier_8 = (evento.which === codjugadap1.LAGARTO) && (codjugadap2.PAPEL);
var P1GanP2Pier_9 = (evento.which === codjugadap1.PAPEL) && (codjugadap2.SPOCK);
var P1GanP2Pier_10 = (evento.which === codjugadap1.SPOCK) && (codjugadap2.PIEDRA);

var P1PierP2Gan_1 = (evento.which === codjugadap2.PIEDRA) && (codjugadap1.TIJERA);
var P1PierP2Gan_2 = (evento.which === codjugadap2.TIJERA) && (codjugadap1.PAPEL);
var P1PierP2Gan_3 = (evento.which === codjugadap2.PAPEL) && (codjugadap1.PIEDRA);
var P1PierP2Gan_4 = (evento.which === codjugadap2.PIEDRA) && (codjugadap1.LAGARTO);
var P1PierP2Gan_5 = (evento.which === codjugadap2.LAGARTO) && (codjugadap1.SPOCK);
var P1PierP2Gan_6 = (evento.which === codjugadap2.SPOCK) && (codjugadap1.TIJERA);
var P1PierP2Gan_7 = (evento.which === codjugadap2.TIJERA) && (codjugadap1.LAGARTO);
var P1PierP2Gan_8 = (evento.which === codjugadap2.LAGARTO) && (codjugadap1.PAPEL);
var P1PierP2Gan_9 = (evento.which === codjugadap2.PAPEL) && (codjugadap1.SPOCK);
var P1PierP2Gan_10 = (evento.which === codjugadap2.SPOCK) && (codjugadap1.PIEDRA);

var PuntajeP1=0;
var PuntajeP2=0;
var masPuntajeP1 = 0;
var masPuntajeP2 = 0;

function detectarJugadas(){
    document.body.onkeydown=(function(evento){
        if(evento.which===P1P2Empate_1 || evento.which===P1P2Empate_2 || evento.which===P1P2Empate_3 || evento.which===P1P2Empate_4 || evento.which===P1P2Empate_5){
            masPuntajeP1=0;
            masPuntajeP2=0;
        }else if(evento.which===P1GanP2Pier_1 || evento.which===P1GanP2Pier_2 || evento.which===P1GanP2Pier_3 || evento.which===P1GanP2Pier_4 || evento.which===P1GanP2Pier_5 || evento.which===P1GanP2Pier_6 || evento.which===P1GanP2Pier_7 || evento.which===P1GanP2Pier_8 || evento.which===P1GanP2Pier_9 || evento.which===P1GanP2Pier_10){
            masPuntajeP1=1;
            masPuntajeP2=0;
        }else if(evento.which===P1PierP2Gan_1 || evento.which===P1PierP2Gan_2 || evento.which===P1PierP2Gan_3 || evento.which===P1PierP2Gan_4 || evento.which===P1PierP2Gan_5 || evento.which===P1PierP2Gan_6 || evento.which===P1PierP2Gan_7 || evento.which===P1PierP2Gan_8 || evento.which===P1PierP2Gan_9 || evento.which===P1PierP2Gan_10){
            masPuntajeP1=0;
            masPuntajeP2=1;
        }
        return masPuntajeP1, masPuntajeP2;
    });
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
    if(masPuntajeP1=1){
        PuntajeP1+=1;
        document.querySelector('#p1-output').textContent = `Puntuación: `+PuntajeP1;
    }else if(masPuntajeP2=1){
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
    setTimeout(detectarJugadas, 3000);
    setTimeout(agregarPuntos, 4000);
    setTimeout(Espera, 4000);
}

agregarPuntos(masPuntajeP1, masPuntajeP2);

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