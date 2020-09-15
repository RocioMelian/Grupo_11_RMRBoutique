var express = require('express');
var router = express.Router();

let products = require('../controllers/productsController')


router.get('/', products.listar)
router.get('/detalle/:id',products.detalle);
router.get('/search',products.search)

router.get('/editarProd/:id',products.editar);
module.exports = router;