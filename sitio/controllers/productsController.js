const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs')


let productos = fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'), 'utf-8')
productos = JSON.parse(productos)


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
<<<<<<< HEAD
    agregar: (req, res) => {
        let productoNuevo = {
            id: productos.length + 1,
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            talle: req.body.talle,
            price: req.body.price,
            discount: req.body.discount,
        }
        
        productos.push(productoNuevo)
        res.send(productos)

        let productoJson = JSON.stringify(productos)
        
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json', ), productoJson)

        res.redirect('/products');
        
    }

    }
=======
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
>>>>>>> 6a96bf5d7be3e8a44a2ab3766d1cac06719d9a7f
