var express = require('express');
var router = express.Router();

const productValidator = require('../validations/productsValidator')
const productsController = require('../controllers/productsController');
const mwProducts = require('../middlewares/mwProducts');
const categoryUser = require('../middlewares/categoryUser');
const noUser = require('../middlewares/noUser');
const productsValidator = require('../validations/productsValidator');

router.get('/',productsController.listar)
router.get('/detalle/:id',noUser,productsController.detalle);
router.get('/search',productsController.search)


router.get('/carga',categoryUser,productsController.formCarga);
router.post('/carga', mwProducts.any(),productsValidator,productsController.agregar)

router.get('/editarProd/:id',productsController.editar);
router.put('/editarProd/:id', mwProducts.any() ,productsController.edit);

router.delete('/delete/:id',productsController.eliminar);

router.get('/categoria/mujer',productsController.mujer)
router.get('/categoria/hombre',productsController.hombre)
router.get('/categoria/nia',productsController.niña)
router.get('/categoria/nio',productsController.niño)
module.exports = router;