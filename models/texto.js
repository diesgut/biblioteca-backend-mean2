'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TextoSchema = Schema({
  codigo: String,
  nombre: String,
  observacion: String,
  paginas: Number,
  categoria: {
    type: Schema.ObjectId,
    ref: 'Categoria'
  }
});

//tendremos nuestra entidad Texto que guardara el TextoSchema
module.exports = mongoose.model('Texto', TextoSchema);
