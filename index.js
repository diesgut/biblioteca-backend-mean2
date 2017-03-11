'use strict'
//ctrol + alt + b format
var mongoose = require("mongoose");
var app = require('./app');
var port = process.env.PORT || 3700;

mongoose.connect('mongodb://localhost:27017/biblioteca3', (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log('Base de datos funcionando correctamente...');

    app.listen(port, function() {
      console.log("API Restful de biblioteca escuchando en el puerto "+port);
    });
  }
});
