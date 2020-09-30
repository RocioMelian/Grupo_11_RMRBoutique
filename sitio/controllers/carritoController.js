module.exports = {
    producto: (req, res) => {
        
        res.render('carrito' , {title : 'Tu carrito',
        css:'style.css'})
    }
}