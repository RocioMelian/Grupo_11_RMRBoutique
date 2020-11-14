const {check,validationResult,body} = require('express-validator');

module.exports = [

    check('name')
    .isLength({
        min:5
    })
    .withMessage('El nombre del producto es obligatorio'),

    check('talle')
    .isInt({
        min:1
    }).withMessage('El producto debe tener un talle válido'),


    check('discount')
    .isInt({
        min:1
    }).withMessage('Si no posee descuento poner 0 (cero)'),

    check('price')
    .isInt({
        min:1
    }).withMessage('El producto debe tener un precio válido'),

    body('image')
    .custom((value,{req})=>{
        if(!req.files[0]){
            return false
        }else{
            return true
        }
    })
    .withMessage("Tiene que subir una imagen"),

    check('description')
    .isLength({
        min:20
    })
    .withMessage('La descripcion del producto es obligatoria'),

    check('categoria')
    .isLength({
        min:1
    })
    .withMessage('La categoria del producto es obligatoria')

]
