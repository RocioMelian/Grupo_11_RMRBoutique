const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs')

module.exports = {
    listar: (req, res) => {
        
        res.render('products' , 
        {title : 'Listado de Productos',
        css:'style.css',
        productos: dbProducts})
    },
    detalle:function(req,res){
        idProducto = req.params.id;
        let producto = dbProducts.filter(producto=>{
            return producto.id == idProducto
        })
        res.render('detalleProd',{
            title:"Detalle del Producto",
            css:"style.css",
            producto:producto[0]
        })
    },
    search:function(req,res){
        let busqueda = req.query.search;
        let productos = [];
        dbProducts.forEach(producto=>{
            if(producto.name.toLowerCase().includes(busqueda.toLowerCase())){
                productos.push(producto)
            }else if (producto.category.toLowerCase().includes(busqueda.toLowerCase())){
                    productos.push(producto)   
            }
            
        })
        res.render('products',{
            title: "Resultado de la busqueda",
            css:"style.css",
            productos:productos
        })
    },
    editar:function(req,res){
        let aEditar;
           dbProducts.forEach(producto=>{
               if(producto.id == req.params.id){
                      aEditar == producto
               }
        })
        res.render('editarProd',{
            title:'Editar producto',
            css:'style.css',
            producto:aEditar
        })
    }
}