'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//carga de rutas
var texto_routes=require('./routes/textoRoute');
var categoria_routes=require('./routes/categoriaRoute');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
/*Compatibilidad y errores cross domain*/
/*
captura request y response
*/
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');

    next();
});

//rutas y controladores
app.use('/apibib',texto_routes);
app.use('/apibib',categoria_routes);

module.exports = app;
