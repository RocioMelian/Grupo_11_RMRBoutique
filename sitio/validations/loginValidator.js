/*const dbUsers = require('../data/dbUsers');*/

const {check,validationResult,body} = require('express-validator');

const bcrypt = require('bcrypt');
const db = require('../database/models');


module.exports = [
    check('email')
    .isEmail()
    .withMessage("Debe Ingresar un Email valido"),

    
    check('password')
    .isLength( {
        min:1
    })
    .withMessage("Ingrese Su Contraseña"),

    body('password')
    .custom(function(value,{req}){
        return db.Users.findOne({
            where : {
                email : req.body.email
            }
        })
        .then( user => {
            if(!bcrypt.compareSync(value,user.password)){
                return Promise.reject('Contraseña Incorrecta')
            }
        })
        .catch(err => {
            return Promise.reject('Contraseña Incorrecta')
        })
    })
]