function calificacionfinal(formulario){
    if(!isNaN(p1, p2, p3, ef, tf)){
        var calif1=parseFloat(formulario.p1.value);
        var calif2=parseFloat(formulario.p2.value);
        var calif3=parseFloat(formulario.p3.value);
        var calif4=parseFloat(formulario.p4.value);
        var calif5=parseFloat(formulario.p5.value);
        var parciales=(calif1+calif2+calif3);
        parciales=parciales*0.55;
        calif4=calif4*0.30;
        calif5=calif5*0.15;
        var final=parciales+calif4+calif5;
        alert("Tu calificación final será de "+final+".");
        var cfinal=Math.round(final);
        alert("Tu calificación final será de "+cfinal+".");
        return true;
    }
    else{
        alert("Por favor ingresa un valor numérico. Puedes usar decimales.");
        return false;
    }
}