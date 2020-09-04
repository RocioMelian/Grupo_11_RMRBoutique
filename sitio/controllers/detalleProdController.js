module.exports = {
    detalle: (req, res) => {
        
        res.render('detalleProd' , {title : 'Producto',
        css: "style.css"})
    }
}