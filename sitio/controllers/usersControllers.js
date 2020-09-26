const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs');
const { validationResult } = require('express-validator');
const e = require('express');
const dbUsers = require('../data/dbUsers');

let usuario = fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8')
usuario = JSON.parse(usuario)

module.exports = {
    sesion: (req, res) => {
        
        res.render('users' , {title : 'Usuario',
        css:"style.css"})
    },
    inicioSesion: (req, res) => {
        let errores = validationResult(req);
        if(errores.isEmpty()){
            dbUsers.forEach(user => {
                if(usuario.email == req.body.email){
                    req.session.usuario = {
                        id: user.id,
                        nick: user.first_name + " " + user.last_name,
                        email: user.email,
                        avatar: user.avatar
                    }
                }
            })
            res.redirect('/login')
        } else {
            res.render('login', {
                title: "ingresa a tu cuenta",
                css:"stylelogin.css",
                errors:errores.mapped(),
                old: req.body
            })
        }
    },
    formulario: (req, res) => {
        
        res.render('register' , {title : 'Registro de Usuario',
        css:'style.css'})
    },
    iniciar: (req, res) => {
        
        res.render('login' , {title : 'Iniciar Sesión',
        css:'style.css'})
    },
    agregar: (req, res, next) => {
    let nuevoUsuario = {
        id: usuario.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        category: req.body.category,
        avatar: req.files[0].filename,
    }
    usuario.push(nuevoUsuario)
    res.send(usuario)

    let userJson = JSON.stringify(usuario)
    
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'users.json', ), userJson)

    res.redirect('users/login');
}
}
