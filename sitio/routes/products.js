var express = require('express');
var router = express.Router();

let products = require('../controllers/productsController')


router.get('/', products.listar)

module.exports = router;