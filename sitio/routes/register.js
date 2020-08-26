var express = require('express');
var router = express.Router();

let register = require('../controllers/registerController')


router.get('/', register.formulario)

module.exports = router;
