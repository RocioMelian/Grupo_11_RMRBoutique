var express = require('express');
var router = express.Router();
var multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    console.log(req.url)
      cb(null, path.join(__dirname, '..', 'public', 'images', 'ropa'))
    },
    filename: function (req, file, cb) {
        console.log(file)
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

const productsController = require('../controllers/productsController');

var upload = multer({ storage: storage })
router.get('/',productsController.listar)
router.get('/detalle/:id',productsController.detalle);
router.get('/search',productsController.search)


router.get('/carga', (req, res) => res.render('formCarga'));
router.post('/carga', upload.any(),productsController.agregar)

router.get('/editarProd/:id',productsController.editar);
module.exports = router;