var express = require('express');
var router = express.Router();

let user = require('../controllers/usersControllers')


router.get('/', user.sesion)
router.get('/register',user.formulario)
router.get('/login',user.iniciar)

module.exports = router;
