function problema1(){
    let texto = document.querySelector('#p1-input').value;
    let separado = texto.split(" ");
    separado.reverse();
    let resultado = separado.join(" ");
    document.querySelector('#p1-output').textContent = 'Palabras invertidas: ' + resultado;
}

function problema2(){
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

//vamos a formar los vectores

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5]
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

//vamos a meter una función de ordenamiento

    v1 = v1.sort(function(a,b){
        return b-a;
    })

    v2 = v2.sort(function(a,b){
        return b-a;
    })

//invierto

    v2 = v2.reverse();

//vamos a recorrer v1 y lo vamos a multiplicar por el inverso de v2

    var p2_producto = 0;
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }
//mostramos el resultado
    document.querySelector('#p2-output').textContent = 'El producto escalar mínimo es de: ' + p2_producto;
}

function problema3(){
    
}