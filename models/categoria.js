'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaSchema = Schema({
  nombre: String,
  tipo: String,
  descripcion: String
});

//tendremos nuestra entidad Categoria que guardara el CategoriaSchema
module.exports=mongoose.model('Categoria',CategoriaSchema);
