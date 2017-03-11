'use string'

var Texto = require('../models/texto');
var Categoria = require('../models/categoria');

function getTexto(req, res) {
  var textoId = req.params.id;
  console.log("Texto find by id " + textoId);
  //findById es un metodo de mongoose
  Texto.findById(textoId, (err, texto) => {
    console.log("Texto " + textoId);
    if (err) {
      console.log("#Error " + err);

      res.status(500).send({
        message: "Error en la aplicacion"
      });
    } else {
      if (!texto) {
        res.status(404).send({
          message: "El texto no existe"
        });
      } else {
        Categoria.populate(texto, {
          path: 'categoria'
        }, function(err, texto) {
          if (err) {
            res.status(500).send({
              message: "Error en la aplicacion"
            });
          } else {
            res.status(200).send({
              texto
            });
          }
        });

      }
    }
  });
}

function getTextos(req, res) {

  console.log("getTextos ");

  Texto.find({}, (err, textos) => {

    if (err) {
      res.status(500).send({
        message: "Error en la aplicacion"
      });
    } else {
      if (!textos) {
        res.status(404).send({
          message: "No hay textos"
        });
      } else {
        res.status(200).send({
          textos
        });
      }
    }
  });
}

function saveTexto(req, res) {
  var texto = new Texto();
  var params = req.body;

  texto.codigo = params.codigo;
  texto.nombre = params.nombre;
  texto.observacion = params.observacion;
  texto.paginas = params.paginas;
  texto.categoria = params.categoria;

  texto.save((err, textoStored) => {
    if (err) {
      res.status(500).send({
        message: 'Error al guardar'
      });
    } else {
      if (!textoStored) {
        res.status(404).send({
          message: "No se guardo el texto"
        });
      } else {
        res.status(200).send({
          textoStored
        });
      }
    }
  });
}

function updateTexto(req, res) {
  console.log('metodo updateTexto');
  var textoId = req.params.id;
  var bodyParams = req.body;

  var texto = new Texto();
  Texto.findByIdAndUpdate(textoId, bodyParams, (err, textoUpdated) => {
    if (err) {
      res.status(500).send({
        message: 'Error al actualizar'
      });
    } else {
      if (!textoUpdated) {
        res.status(404).send({
          message: 'no se pudo actualizar'
        });
      } else {
        res.status(200).send({
          texto: textoUpdated
        });
      }
    }
  });
}

  function deleteTexto(req, res) {
    console.log('metodo deleteTexto');
    var textoId = req.params.id;

    var texto = new Texto();
    Texto.findByIdAndRemove(textoId, (err, textoRemoved) => {
      if (err) {
        res.status(500).send({
          message: 'Error al borrar'
        });
      } else {
        if (!textoRemoved) {
          res.status(404).send({
            message: 'no se pudo borrar'
          });
        } else {
          res.status(200).send({
            texto: textoRemoved
          });
        }
      }
    });
}

module.exports = {
  getTexto,
  getTextos,
  saveTexto,
  updateTexto,
  deleteTexto
}
