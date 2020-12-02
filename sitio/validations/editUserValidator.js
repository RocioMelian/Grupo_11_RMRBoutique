const {check,validationResult,body} = require('express-validator');
const db = require('../database/models')

module.exports = [
    
    check('first_name')
    .isLength({
        min:2
    })
    .withMessage("Debes ingresar tu nombre"),

    check('last_name')
    .isLength({
        min:2
    })
    .withMessage("Debes ingresar tu apellido"),

    
    body('avatar')
    .custom((value,{req}) =>{
        if(req.fileValidationError){
            return false
        }else{
            return true
        }
    })
    .withMessage("Solo se permite png, jpg, jpeg, gif"),

    
]