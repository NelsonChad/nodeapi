'use strict' 
const mongoose = require('mongoose');
const Product = mongoose.model('Product'); // Importa o Model Product
 
exports.get = (req, res, next) =>{
    Product.find({ active: true}, 'title price slug').then( data  => {
        res.status(200).send(data);  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao listar Produtos!',
            date:  e
        });  
    });  
};

exports.getBySlug = (req, res, next) =>{
    Product.findOne({ 
            active: true,
            slug: req.params.slug},
            'title description price slug tags'
        ).then( data  => {
        res.status(200).send(data);  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao listar Produto!',
            date:  e
        });  
    });  
};

exports.getById = (req, res, next) =>{
    Product.findById(req.params.id).then( data  => {
        res.status(200).send(data);  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao listar Produto!',
            date:  e
        });  
    });  
};

exports.getByTags = (req, res, next) =>{
    Product.find({
        tags: req.params.tag,
        active: true,
    },
    'title description price slug tags'
    ).then( data  => {
        res.status(200).send(data);  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao listar Produto!',
            date:  e
        });  
    });  
};

exports.post = (req, res, next) =>{
    var product = new Product(req.body); //Instancia de um produto
    product.save().then(x =>{
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao cadastrado Produto!',
            date:  e
        });  
    });  
};

exports.put = ((req, res, next) =>{
    Product.findByIdAndUpdate(req.params.id,{
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
        }
    }).then(x =>{
        res.status(200 ).send({
            message: 'Produto actualizado com sucesso!'
        });  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao atualizar Produto!',
            date:  e
        });  
    });  
});

exports.delete = (req, res, next) =>{
    Product.findOneAndRemove(req.params.id).then( data  => {
        res.status(200).send({
            message: 'Produto apagado com sucesso!'
        });  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao apagar Produto!',
            date:  e
        });  
    });  
};