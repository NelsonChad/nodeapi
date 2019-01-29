'use strict' 

const repository = require('../repositories/products-repository'); //Repositorio
 
exports.get = (req, res, next) =>{
    repository.get()
    .then( data  => {
        res.status(200).send(data);  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao listar Produtos!',
            date:  e
        });  
    });  
};

exports.getBySlug = (req, res, next) =>{
    repository.getBySlug(req.params.slug)
    .then( data  => {
        res.status(200).send(data);  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao listar Produto!',
            date:  e
        });  
    });  
};

exports.getById = (req, res, next) =>{
    repository.getById(req.params.id)
    .then( data  => {
        res.status(200).send(data);  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao listar Produto!',
            date:  e
        });  
    });  
};

exports.getByTags = (req, res, next) =>{
    repository.getByTags(req.params.tag)
    .then( data  => {
        res.status(200).send(data);  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao listar Produto!',
            date:  e
        });  
    });  
};

exports.post = (req, res, next) =>{
    repository.post(req.body)
    .then(x =>{
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
    repository.put(req.params.id, req.body)
    .then(x =>{
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
    repository.delete(req.params.id)
    .then( data  => {
        res.status(200).send({
            message: 'Produto apagado com sucesso!'
        });  
    })
    .catch( e =>{
        res.status(400).send({
            message: 'Falha ao apagar Produto!',
            date:  e
        });  
    });  
};