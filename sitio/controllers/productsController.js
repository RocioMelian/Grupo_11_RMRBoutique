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
    formCarga:function(req, res){
        res.render('formCarga', 
        {title : 'Carga de Productos',
        css: "style.css"})
    },
    agregar: (req, res, next) => {
        // res.send(req.file)
        let productoNuevo = {
            id: productos.length + 1,
            name: req.body.name,
            description: req.body.description,
            image: req.files[0].filename,
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
        
    },

    
    editar:function(req,res){
        idProducto = req.params.id;
        let producto = dbProducts.filter(producto=>{
            return producto.id == idProducto
        })
        res.render('editarProd',{
            title:'Editar producto',
            css:'style.css',
            producto:producto[0]
        })
    },
    edit:function(req,res){
            dbProducts.forEach(producto=>{
              if(producto.id == req.params.id){
                 producto.name = req.body.name;
                 producto.description = req.body.description;
                 producto.image = req.body.image;
                 producto.category = req.body.category;
                 producto.talle = req.body.talle;
                 producto.price = req.body.price;
                 producto.discount = req.body.discount;

            }
        })
        let productoJson = JSON.stringify(dbProducts)
        
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json', ), productoJson)

        res.redirect('/products/detalle');
    }
}
