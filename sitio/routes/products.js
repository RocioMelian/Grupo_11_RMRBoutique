var express = require('express');
var router = express.Router();

const productValidator = require('../validations/productsValidator')
const productsController = require('../controllers/productsController');
const mwProducts = require('../middlewares/mwProducts');
const categoryUser = require('../middlewares/categoryUser');
const noUser = require('../middlewares/noUser');

router.get('/',productsController.listar)
router.get('/detalle/:id',noUser,productsController.detalle);
router.get('/search',productsController.search)


router.get('/carga',categoryUser,productsController.formCarga);
router.post('/carga', mwProducts.any(),productsController.agregar)

router.get('/editarProd/:id',productsController.editar);
router.put('/editarProd/:id', mwProducts.any() ,productsController.edit);

router.delete('/delete/:id',productsController.eliminar);
module.exports = router;