/*const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs')
const dbUsers = require('../data/dbUsers');

let productos = fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'), 'utf-8')
productos = JSON.parse(productos)*/
const db = require('../database/models');
const { Op } = require("sequelize");
const {validationResult} = require('express-validator');

module.exports = {
    listar: (req, res) => {
        db.Products.findAll({
            order: [["name","ASC"]]
        })
        

        .then(producto =>{
        res.render('products' , 
        {title : 'Listado de Productos',
        css:'style.css',
        producto: producto})
        })
    },
    detalle:function(req,res){
     
        db.Products.findOne({
            where : {
                id: req.params.id
            },
            include : [
                {
                    association: 'categorias'
                }
            ]
        })
       
        .then(function(producto){
        res.render('detalleProd',{
            title:"Detalle del Producto",
            css:"style.css",
            producto:producto,
            categorias: producto.categorias,
           
            })
            
        })
    },
    search:function(req,res){
        if(req.query.search == ""){
            res.redirect('/')
        }
        /*let busqueda = req.query.search;
        let productos = [];
        dbProducts.forEach(producto=>{
            if(producto.name.toLowerCase().includes(busqueda.toLowerCase())){
                productos.push(producto)
            }else if (producto.category.toLowerCase().includes(busqueda.toLowerCase())){
                    productos.push(producto)  
            }
            
        })*/
        let busqueda = req.query.search;
        db.Products.findAll({
            where: {
                
                name: {[Op.like]: `%${busqueda}%`}
            }
        })
        .then(producto => {
            res.render('products',{
                title: "Resultado de la busqueda",
                css:"style.css",
                producto:producto
            })
        })
        .catch(error=>{
            res.send(error)
        })
    },
    formCarga:function(req, res){
        let categoria = db.Categorias.findAll()
        
        .then((categoria) => {
            res.render('formCarga', 
            {title : 'Carga de Productos',
            css: "style.css",
            script: 'prodAdd.js',
            categoria : categoria
           })
        })
       
    },
    agregar: (req, res, next) => {
        let errors = validationResult(req)

        if(errors.isEmpty()){
            db.Products.create({
                name: req.body.name,
                description: req.body.description,
                image: (req.files[0])?req.files[0].filename: "default-image.png",
                id_categoria: req.body.id_categoria,
                talle: req.body.talle,
                price: req.body.price,
                discount: req.body.discount,
            })
            .then(()=>{
                return res.redirect('/products')
            })
        }else{
            db.Categorias.findAll({
                order:[
                    'nombre'
                ]
            })
            .then(categoria => {
                let oldCategoria;
                if(req.body.categoria){
                    categoria.forEach(categoria => {
                        if(categoria.id == req.body.categoria){
                            oldCategoria = categoria.nombre
                        }
                    });
                }
            res.render('formCarga', {
                title: "Agregar Producto",
                css:'style.css',
                categoria: categoria,
                errors: errors.mapped(),
                old:req.body,
                oldCategoria:oldCategoria
            }) 
        
            })
       
        
        /*productos.push(productoNuevo)
        res.send(productos)

        let productoJson = JSON.stringify(productos)
        
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json', ), productoJson)

        res.redirect('/products');*/
        } 
    },

    
    editar:function(req,res){
        /*idProducto = req.params.id;
        let producto = dbProducts.filter(producto=>{
            return producto.id == idProducto
        })*/
        let producto = db.Products.findOne({
            where : {
                id: req.params.id
            },
            include : [
                {
                    association: 'categorias'
                }
            ]
        })
        let categoria = db.Categorias.findAll()
        Promise.all([producto,categoria])
        
         .then(([producto,categoria]) =>{
            res.render('editarProd',{
            title:'Editar producto',
            css:'style.css',
            script:'editProd.js',
            producto: producto,
            categoria: categoria
        })
    })
    },
    edit:function(req,res){
        let producto = db.Products.findAll()
        let errors = validationResult(req)
        if(errors.isEmpty()){
            db.Products.update(
                {
           
                name : req.body.name,
                description : req.body.description,
                image : (req.files[0])?req.files[0].filename: producto.image,
                id_categoria : req.body.id_categoria,
                talle : req.body.talle,
                price : req.body.price,
                discount : req.body.discount
            },
            {
                where : {
                    id : req.params.id
                }
            }
            
        )
        .then(() => {
             res.redirect('/products/detalle/' + req.params.id)
        })
        .catch(error =>{
            res.send(error)
        })
    }else{
        let producto = db.Products.findOne({
            where : {
                id: req.params.id
            },
            include : [
                {
                    association: 'categorias'
                }
            ]
        })
        let categoria = db.Categorias.findAll()
        Promise.all([producto,categoria])
        
         .then(([producto,categoria]) =>{
            res.render('editarProd',{
            title:'Editar producto',
            css:'style.css',
            producto: producto,
            categoria: categoria,
            errors: errors.mapped(),
            old:req.body,
        })
    })
}
        /*fs.writeFileSync(path.join(__dirname,'../data/products.json'), JSON.stringify(dbProducts),'utf-8');
        res.redirect('/products/detalle/' + idProducto);*/
    },
    eliminar:function(req,res){
       /* let idProducto = req.params.id;
        dbProducts.forEach(producto =>{
            if(producto.id == idProducto){
                let aEliminar = dbProducts.indexOf(producto)
                dbProducts.splice(aEliminar,1)
            }
        })
        fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(dbProducts))
        res.redirect('/products')*/
        db.Products.destroy({
            where:{
              id: req.params.id
            }
          })
          .then(() =>{
            res.redirect('/products')
          
        })
    },
    mujer:function(req,res){
       db.Products.findAll({
           where :{
            id_categoria : 2
           }
       })
        
    
      .then((producto) => {
        res.render('categoria',{
            title:'Mujeres',
            css:'style.css',
            producto: producto,
        })
      })
    },
    hombre:function(req,res){
        db.Products.findAll({
            where :{
             id_categoria : 1
            }
        })
         
     
       .then((producto) => {
         res.render('categoria',{
             title:'Hombres',
             css:'style.css',
             producto: producto,
         })
       })
    },
    niña:function(req,res){
        db.Products.findAll({
            where :{
             id_categoria : 4
            }
        })
         
     
       .then((producto) => {
         res.render('categoria',{
             title:'Niñas',
             css:'style.css',
             producto: producto,
         })
       })
    },
    niño:function(req,res){
        db.Products.findAll({
            where :{
             id_categoria : 3
            }
        })
         
     
       .then((producto) => {
         res.render('categoria',{
             title:'Niños',
             css:'style.css',
             producto: producto,
         })
       })
    }
}
