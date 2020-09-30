var express = require('express');
var router = express.Router();

let index = require('../controllers/indexController')


router.get('/', index.home)

module.exports = router;
