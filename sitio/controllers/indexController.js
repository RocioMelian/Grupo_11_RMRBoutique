const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs')

module.exports = {
    home: (req, res) => {
        let productos = dbProducts.filter(producto=>{
                return producto
        })
        res.render('index' , 
        {title : 'RMR Boutique',
        css:'style.css',
        productos: dbProducts})
    }
}