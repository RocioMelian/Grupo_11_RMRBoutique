var express = require('express');
var router = express.Router();

let index = require('../controllers/indexController')
let cookies = require('../middlewares/cookieCheck')


router.get('/',cookies, index.home)

module.exports = router;
