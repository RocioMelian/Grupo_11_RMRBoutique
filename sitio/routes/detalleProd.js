var express = require('express');
var router = express.Router();

let detalleProd = require('../controllers/detalleProdController')


router.get('/', detalleProd.detalle)

module.exports = router;