//primero tenemos que importar las librerías

var express = require('express');

//tenemos que realizar una instancia del objeto para poder hacer uso de express

var app = express();

//para node tenemos que utilizar rutas de acceso a
//por medio de los métodos get (es una ruta que me posiciona en la raíz de todo), post, pust, delete

app.get('/', function(req, res){
    //debemos generar una respuesta del sitio
    res.send('Ruta de Inicio');
});

//Levantamos el servidor
app.listen(3000, function(req, res){
    console.log('Servidor inicializado en el puerto 3000');
});