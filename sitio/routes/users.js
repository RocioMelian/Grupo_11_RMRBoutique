var express = require('express');
var router = express.Router();


const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

const user = require('../controllers/usersControllers')
const mwUser = require('../middlewares/mwUsers')





router.get('/register',user.formulario)
router.post('/register',mwUser.any(),registerValidator, user.agregar)

router.get('/perfil', user.sesion)
router.put('/updateProfile/:id',mwUser.any(),user.updateProfile);

router.get('/login',user.iniciar)
router.post('/login',loginValidator,user.inicioSesion)

router.get('/logout',user.logout);

router.delete('/delete/:id',user.delete);


module.exports = router;
