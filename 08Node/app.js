//vamos a crear nuestro propio servidor

var http = require('http');

//todo servidor debe de poder atender peticiones y debe de generar respuestas, por lo tanto nuestra función debe de tener dos parámetros: request y response

var servidor = http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    response.write('<h2>Hola Mundo, soy Rodríguez Torres Fernanda. Tengo miedo.</h2>');
    console.log('Se hizo una petición web.');
    response.end();
});

//decir en qué puerto funcionará el servidor
servidor.listen(3000);

//ejecutamos en consola
console.log('Ejecutando el servidor en el puerto 3000');