var mysql = require('mysql2');

//primero conectamos la bd

var conexion = mysql.createConnection({
    host : 'localhost', //aqui va la IP cuando no sea local
    database : 'alumnos4iv7',
    user : 'root',
    password : 'Yonezu_Kenshi_08'
});

//ejecutamos la conexion
conexion.connect(function(error){
    if(error){
        throw error;
        console.log('Solo juguito contigo');
    }else{
        console.log('Conected');
    }
});

conexion.query('select * from registro', function(error, response){
    if(error){
        throw error;
        console.log('No tablita');
    }else{
        //como no c cuántos datos tengo, recorro
        response.forEach(response => {
            console.log(response);
        })
    }
});

//vamos a agregar
/*
conexion.query('insert into registro(nombre, appat, apmat, correo, password) values("Juanito", "Sanchez", "Sanchez", "cosita@cosita.com", "12345")', function(error, response){
    if(error){
        throw error;
        console.log('No se pudo insertar');
    }else{
        console.log('Registro exitoso :), ', response);
    }
});

conexion.query('insert into registro(nombre, appat, apmat, correo, password) values("Fernanda", "Rodriguez", "Torres", "hac@hi.com", "08080")', function(error, response){
    if(error){
        throw error;
        console.log('No se pudo insertar');
    }else{
        console.log('Registro exitoso :), ', response);
    }
});

conexion.query('update registro set appat = "Cruz" where boleta = 3', function(error, response){
    if(error){
        throw error;
        console.log('No se pudo insertar');
    }else{
        console.log('Registro exitoso :), ', response);
    }
});

conexion.query('delete from registro where nombre = "Fernanda"', function(error, response){
    if(error){
        throw error;
        console.log('No se pudo insertar');
    }else{
        console.log('Registro exitoso :), ', response);
    }
});*/