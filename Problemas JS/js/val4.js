function calfinal(formulario){
        var calif1=parseFloat(formulario.p1.value);
        var calif2=parseFloat(formulario.p2.value);
        var calif3=parseFloat(formulario.p3.value);
        var calif4=parseFloat(formulario.p4.value);
        var calif5=parseFloat(formulario.p5.value);
        var parciales1=(calif1+calif2+calif3)/3;
        var parciales2=parciales1*0.55;
        var calife=calif4*0.30;
        var calift=calif5*0.15;
        var final=parciales2+calife+calift;
        alert("Tu calificación final es "+final+".")
        return true;
}