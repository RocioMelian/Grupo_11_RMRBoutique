var express = require('express');
var router = express.Router();


const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

const user = require('../controllers/usersControllers')
const mwUser = require('../middlewares/mwUsers')



router.get('/', user.sesion)

router.get('/register',user.formulario)
router.post('/register',mwUser.any(),registerValidator, user.agregar)


router.get('/login',user.iniciar)
router.post('/login',loginValidator,user.inicioSesion)


module.exports = router;
