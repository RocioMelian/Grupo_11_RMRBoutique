var express = require('express');
var router = express.Router();

let formCarga = require('../controllers/formCargaController')


router.get('/', formCarga.formulario)

module.exports = router;