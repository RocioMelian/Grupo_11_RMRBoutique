const {check,validationResult,body} = require('express-validator');

/*const dbUsers = require('../data/dbUsers')*/
let db = require('../database/models');
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

    check('email')
    .isEmail()
    .withMessage("Debes ingresar un email válido"),

    body('email')
    .custom(function(value){
        return db.Users.findOne({
            where : {
                email : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('Este mail ya está registrado')
            }
        })
     }),
    check('password')
    .isLength({
        min:8,
        max:12
    })
    .withMessage("Debes ingresar una contraseña entre 8 y 12 caracteres"),

    body('avatar')
    .custom((value,{req}) =>{
        if(req.fileValidationError){
            return false
        }else{
            return true
        }
    })
    .withMessage("Solo se permite png, jpg, jpeg, gif"),

    check('checkbox')
    .isString("on")
    .withMessage("Debes aceptar las bases y condiciones")
]