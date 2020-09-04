var express = require('express');
var router = express.Router();

let user = require('../controllers/usersControllers')


router.get('/', user.sesion)

module.exports = router;
