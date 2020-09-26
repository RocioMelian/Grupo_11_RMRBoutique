const dbUsers = require('../data/dbUsers');

const {check,body} = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = [
    check('email')
    .isEmail()
    .withMessage("Debe Ingresar un Email valido"),

    body('email')
    .custom(function(value){
        for(let i = 0; i<dbUsers.length; i++) {
            if(dbUsers[i].email != value) {
                return false
            }
        }
        return true
    })
    .withMessage("El usuario No esta registrado"),

    check('pass')
    .isLength( {
        min:1
    })
    .withMessage("Ingrese Su Contraseña"),

    body('pass')
    .custom(function(value,{req}){
        let resultado = true;
        dbUsers.forEach(usuario => {
            if(usuario.email == req.body.email){
                if(!bcrypt.compareSync(value,usuario.password)){
                    resultado = false
                }
            }
        });
        if(resultado == false) {
            return false
        } else {
            return true
        }
    })
    .withMessage("Contraseña Incorrecta")
]