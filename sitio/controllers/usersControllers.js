const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs');
const { validationResult } = require('express-validator');
const e = require('express');
const dbUsers = require('../data/dbUsers');
const bcrypt = require('bcrypt')

let usuario = fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8')
usuario = JSON.parse(usuario)

module.exports = {
    sesion: function(req,res){
        res.render('users',{
            title:"Supér ofertas",
            css: "style.css",
            productos: dbProducts.filter(producto =>{
                if(producto.discount > 30){
                    return producto
                }
            })
            
        })
    },
    iniciar: (req, res) => {
        
        res.render('login' , {title : 'Iniciar Sesión',
        css:'style.css'})
    },
    
    inicioSesion: (req, res) => {
        function capitalize(word) {
            return word[0].toUpperCase() + word.slice(1);
          }
        let errores = validationResult(req);
        if(errores.isEmpty()){
            dbUsers.forEach(user => {
                if(user.email == req.body.email){
                    req.session.user = {
                        id: user.id,
                        nick: capitalize(user.first_name),
                        email: user.email,
                        avatar: user.avatar,
                        category: user.category
                    }
                }
            })
            if(req.body.recuerdame){
                res.cookie('userRmr',req.session.user,{maxAge:1000*60*60})
            }
            
            res.redirect('/')
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
    agregar: (req, res, next) => {
    let nuevoUsuario = {
        id: usuario.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        category: req.body.category,
        avatar: (req.files[0])?req.files[0].filename:"guest.png",
    }
    usuario.push(nuevoUsuario)
    
    let userJson = JSON.stringify(usuario)
    
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'users.json', ), userJson)

    res.redirect('/users/login');
},
logout:function(req,res){
    req.session.destroy()
    if(req.cookies.userRmr){
        res.cookie('userRmr',' ',{maxAge:-1});
    }
    return res.redirect('/')
}
}
