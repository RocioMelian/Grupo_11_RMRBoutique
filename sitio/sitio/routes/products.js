var express = require('express');
var router = express.Router();


const productsController = require('../controllers/productsController');
const mwProducts = require('../middlewares/mwProducts');


router.get('/',productsController.listar)
router.get('/detalle/:id',productsController.detalle);
router.get('/search',productsController.search)


router.get('/carga',productsController.formCarga);
router.post('/carga', mwProducts.any(),productsController.agregar)

router.get('/editarProd/:id',productsController.editar);
router.put('/editarProd/:id', mwProducts.any() ,productsController.edit);

router.delete('/delete/:id',productsController.eliminar);
module.exports = router;