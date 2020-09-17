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
    }
}