const {check,validationResult,body} = require('express-validator');

/*const dbUsers = require('../data/dbUsers')*/
let db = require('../database/models');
module.exports = [
    
    check('first_name')
    .isLength({
        min:1
    })
    .withMessage("Debes ingresar tu nombre"),

    check('last_name')
    .isLength({
        min:1
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
        min:6,
        max:12
    })
    .withMessage("Debes ingresar una contraseña entre 6 y 12 caracteres"),

    check('checkbox')
    .isString("on")
    .withMessage("Debes aceptar las bases y condiciones")
]