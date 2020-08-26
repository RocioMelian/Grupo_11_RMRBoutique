var express = require('express');
var router = express.Router();

let register = require('../controllers/registerController')


router.get('/', function(req, res, next) {
  res.render('register', { title: 'Registrate' });
});

module.exports = router;
