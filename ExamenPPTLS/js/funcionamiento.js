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
var numronda = 0;

function obtenerValores(){
    jugadaP1 = document.querySelector('#p1-input').value;
}

function compararJugadas_1(){
    var rnd = Math.random();
    jugadaP2 = Math.floor(rnd*(opciones.length));
    if(document.querySelector('#p1-input').value=="1"){
        if(jugadaP2=="0"){
            document.querySelector('#p1-invalido').textContent = 'Empate';
            document.querySelector('#p2-invalido').textContent = 'Empate';
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
        document.querySelector('#p1-invalido').textContent = 'Jugada inválida';
    }else{
        alert("Jugada inválida")
    }
}

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
        siguienteRonda();
        setTimeout(dosSegundos, 1000);
        setTimeout(unSegundo, 2000)
        setTimeout(ceroSegundos,3000);
        setTimeout(obtenerValores, 4000);
        setTimeout(imagenesP1, 4001);
        setTimeout(Espera, 7000);
        setTimeout(compararJugadas_1, 7000);
}

const ronda = setInterval(tiempoEspera, 10000);

setTimeout(Detener, 28000);

setInterval(definirGanador, 29000, PuntajeP1, PuntajeP2)

function siguienteRonda(){
    numronda+=1;
    document.querySelector('#NumRonda').textContent = 'Ronda '+numronda;
}

function Detener(){
    clearInterval(ronda);
}

function tresSegundos(){
    document.querySelector('#SigRonda').textContent = `Siguiente ronda en 3`
    document.querySelector('#p1-invalido').textContent = '';
    document.querySelector('#p2-invalido').textContent = '';
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
    imgP1.src="./img/void.png"
}

function definirGanador(){
    if(PuntajeP1 > PuntajeP2){
        document.querySelector('#NumRonda').textContent = 'Ganaste :D';
    }else if(PuntajeP1 < PuntajeP2){
        document.querySelector('#NumRonda').textContent = 'Perdiste :(';
    }else{
        document.querySelector('#NumRonda').textContent = 'Empate ö';
    }
}

function imagenesP1(){
    if(jugadaP1=="1"){
        imgP1.src="./img/piedra.png"
    }else if(jugadaP1=="2"){
        imgP1.src="./img/papel.png"
    }else if(jugadaP1=="3"){
        imgP1.src="./img/tijeras.png"
    }else if(jugadaP1=="4"){
        imgP1.src="./img/lagarto.png"
    }else if(jugadaP1=="5"){
        imgP1.src="./img/spock.png"
    }else{
        imgP1.src="./img/void.png"
    }
}