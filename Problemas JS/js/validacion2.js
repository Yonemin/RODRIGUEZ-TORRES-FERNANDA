function calculo(formulario){
    var ventaI=parseFloat(formulario.venta1.value);
    var ventaII=parseFloat(formulario.venta2.value);
    var ventaIII=parseFloat(formulario.venta3.value);
    var sueldo=parseFloat(formulario.sueldo.value);
    ventass=ventaI+ventaII+ventaIII;
    comision=ventass*0.10;
    sb=comision+sueldo;
    alert("Su sueldo bruto es de: "+sb+".")
    return true;
}