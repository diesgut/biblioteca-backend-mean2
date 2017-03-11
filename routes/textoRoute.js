'use strict'

var express = require('express');
var TextoController = require('../controllers/textoController');
var api=express.Router();

api.get('/texto/:id',TextoController.getTexto);
api.get('/textos',TextoController.getTextos);
api.post('/texto',TextoController.saveTexto);
api.put('/texto/:id',TextoController.updateTexto);
api.delete('/texto/:id',TextoController.deleteTexto);

module.exports=api;
