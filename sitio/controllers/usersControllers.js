const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs')

let usuario = fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8')
usuario = JSON.parse(usuario)

module.exports = {
    sesion: (req, res) => {
        
        res.render('users' , {title : 'Usuario',
        css:"style.css"})
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
