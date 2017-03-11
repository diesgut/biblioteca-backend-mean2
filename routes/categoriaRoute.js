'use strict'

var express = require('express');
var CategoriaController = require('../controllers/categoriaController');
var api=express.Router();

api.get('/categoria/:id',CategoriaController.getCategoria);
api.get('/categorias',CategoriaController.getCategorias);
api.post('/categoria',CategoriaController.saveCategoria);
api.put('/categoria/:id',CategoriaController.updateCategoria);
api.delete('/categoria/:id',CategoriaController.deleteCategoria);

module.exports=api;
