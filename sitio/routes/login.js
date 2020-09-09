var express = require('express');
var router = express.Router();

let login = require('../controllers/loginController')


router.get('/', login.iniciar)

module.exports = router;