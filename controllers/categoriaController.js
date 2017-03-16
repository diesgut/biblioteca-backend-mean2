'use string'

var Categoria = require('../models/categoria');

function getCategoria(req, res) {
  var categoriaId = req.params.id;
  console.log("Categoria find by id " + categoriaId);
  //findById es un metodo de mongoose
  Categoria.findById(categoriaId, (err, categoria) => {
    console.log("Categoria " + categoriaId);
    if (err) {
      console.log("#Error " + err);

      res.status(500).send({
        message: "Error en la aplicacion"
      });
    } else {
      if (!categoria) {
        res.status(404).send({
          message: "La categoria no existe"
        });
      } else {
        res.status(200).send({
          categoria
        });
      }
    }
  });
}

function getCategorias(req, res) {

  console.log("getCategorias ");

  Categoria.find({}, (err, categorias) => {

    if (err) {
      res.status(500).send({
        message: "Error en la aplicacion"
      });
    } else {
      if (!categorias) {
        res.status(404).send({
          message: "No hay categorias"
        });
      } else {
        res.status(200).send({
          categorias
        });
      }
    }
  });
}

function saveCategoria(req, res) {
  var categoria = new Categoria();
  var params = req.body;
  console.log('save categoria ');
  console.dir(params);
  categoria.nombre = params.nombre;
  categoria.tipo = params.tipo;
  categoria.descripcion = params.descripcion;

  categoria.save((err, categoriaStored) => {
    if (err) {
      res.status(500).send({
        message: 'Error al guardar'
      });
    } else {
      if (!categoriaStored) {
        res.status(404).send({
          message: "No se guardo la categoria"
        });
      } else {
        res.status(200).send({
          categoria:categoriaStored
        });
      }
    }
  });
}

function updateCategoria(req, res) {
  console.log('metodo updateCategoria');
  var categoriaId = req.params.id;
  var bodyParams = req.body;

  //  var categoria = new Categoria();
  Categoria.findByIdAndUpdate(categoriaId, bodyParams, (err, categoriaUpdated) => {
    if (err) {
      res.status(500).send({
        message: 'Error al actualizar'
      });
    } else {
      if (!categoriaUpdated) {
        res.status(404).send({
          message: 'no se pudo actualizar'
        });
      } else {
        res.status(200).send({
          texto: categoriaUpdated
        });
      }
    }
  });
}

function deleteCategoria(req, res) {
  console.log('metodo deleteCategoria');
  var categoriaId = req.params.id;


  Categoria.findByIdAndRemove(categoriaId, (err, categoriaRemoved) => {
    if (err) {
      res.status(500).send({
        message: 'Error al borrar'
      });
    } else {
      if (!categoriaRemoved) {
        res.status(404).send({
          message: 'no se pudo borrar'
        });
      } else {
        res.status(200).send({
          categoria: categoriaRemoved
        });
      }
    }
  });
}

module.exports = {
  getCategoria,
  getCategorias,
  saveCategoria,
  updateCategoria,
  deleteCategoria
}
