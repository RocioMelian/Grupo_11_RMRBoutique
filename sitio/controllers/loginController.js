module.exports = {
    iniciar: (req, res) => {
        
        res.render('login' , {title : 'Iniciar Sesión',
        css:'style.css'})
    }
}