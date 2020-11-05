/*const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs')*/

const db = require('../database/models')

module.exports = {
   
     home: (req, res) => {
        /*let productos = dbProducts.filter(producto=>{
                return producto
        })*/
            db.Products.findAll()
        
        .then(productos =>{
            res.render('index' , 
                {title : 'RMR Boutique',
                css:'style.css',
                productos: productos
                
           })
        })
    }
}