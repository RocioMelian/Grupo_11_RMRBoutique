module.exports = {
    listar: (req, res) => {
        
        res.render('products' , {title : 'Listado de Productos',
        css:'style.css'})
    }
}