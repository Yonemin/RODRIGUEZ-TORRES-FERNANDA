//tenemos que tener las librerías

var createError = requiere('http-errors');
var express = require('express');
var path = require('path');     //archivos
var cookieParser = require('cookie-parser');

//vamos a crear las primeras rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//vamos a visualizar los elementos
var app = express();


//vamos a visualizar la view
//para decirle al código dónde se encuentra cada archivo de cada vista
app.set('views', path.join(__dirname, 'views'));
//tengo que definir el tipo de plantilla
app.set('views engine', 'ejs');

//vamos a usar la ruta
app.use('/', indexRouter);
//definitmos si hay más rutas
app.use('/users', usersRouter);

//vamos a definir los directorios públicos
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));    //todo lo demás, o sea el back, no será visible

//por si hay un error 404
app.use(function(req, res, next){
    next(createError(404));
});

//para el manejo del handler
app.use(function(err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //vamos a error 500, algo del servidor
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;