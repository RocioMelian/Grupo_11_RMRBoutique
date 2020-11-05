const path = require('path');

const fs = require('fs');

const { validationResult } = require('express-validator');
const db = require('../database/models')
const bcrypt = require('bcrypt')

const e = require('express');


module.exports = {
    
   
    formulario: (req, res) => {
        
        res.render('register' , {
            title : 'Registro de Usuario',
            css:'style.css'
        })
    
    },
    agregar: (req, res, next) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
          db.Users.create({
        
        first_name: req.body.first_name.trim(),
        last_name: req.body.last_name.trim(),
        email: req.body.email.trim(),
        password: bcrypt.hashSync(req.body.password, 10),
        category: req.body.category,
        avatar: (req.files[0])?req.files[0].filename:"guest.png",
    })
    .then(usuario =>{
        res.redirect('/users/login')
    })
    .catch(error =>{
        res.send(error)
    })
}else{
    res.render('register' , {
        title : 'Registro de Usuario',
        css:'style.css',
        errors:errors.mapped(),
       
    })

    /*usuario.push(nuevoUsuario)
    
    let userJson = JSON.stringify(usuario)
    
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'users.json', ), userJson)
    */
  
  }
},
iniciar: (req, res) => {
        
    res.render('login' , {
        title : 'Iniciar Sesión',
        css:'style.css'})
},

inicioSesion: (req, res) => {
   
    let errores = validationResult(req);
    if(errores.isEmpty()){
        db.Users.findOne({
           where :{
               email : req.body.email
           }
        })
           .then(user =>{
                  req.session.user = {
                    id: user.id,
                    nick: user.first_name,
                    email: user.email,
                    category: user.category,
                    avatar: user.avatar
                    
                }
            
        
        if(req.body.recuerdame){
            res.cookie('userRmr',req.session.user,{maxAge:1000*60*60})
        }
        res.locals.user = req.session.user
        res.redirect('/')
    })
        .catch(err => {
            res.send(err)
        })
    } else {
        res.render('login', {
            title: "ingresa a tu cuenta",
            css:"stylelogin.css",
            errors:errores.mapped(),
            old: req.body
        })
    }
},
sesion: function(req,res){
    
    db.Users.findByPk(req.session.user.id)
    .then(user => {
        res.render('users',{
            title:"Perfil de usuario",
            css: "style.css",
            usuario : user
        })
    })
    .catch( error => {
        res.send(error)
    })
},
updateProfile:function (req,res) {
    
},
delete:function(req,res) {
    
},
logout:function(req,res){
    req.session.destroy()
    if(req.cookies.userRmr){
        res.cookie('userRmr',' ',{maxAge:-1});
    }
    return res.redirect('/')
}
}
