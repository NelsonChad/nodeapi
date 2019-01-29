'use strict' 

const repository = require('../repositories/customer-repository'); //Repositorio
 
exports.get = (req, res, next) =>{
    repository.get()
    .then( data  => {
        res.status(200).send(data);  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao listar Cliente!',
            date:  e
        });  
    });  
};

exports.post = (req, res, next) =>{
    repository.post(req.body)
    .then(x =>{
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });  
    }).catch( e =>{
        res.status(400).send({
            message: 'Falha ao cadastrar Cliente!',
            date:  e
        });  
    });  
};