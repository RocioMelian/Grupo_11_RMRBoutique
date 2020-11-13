const {check,validationResult,body} = require('express-validator');

module.exports = [

    check('name')
    .isLength({
        min:5
    })
    .withMessage('El nombre del producto es obligatorio'),

    check('description')
    .isLength({
        min:20
    })
    .withMessage('La descripcion del producto es obligatoria'),

]
