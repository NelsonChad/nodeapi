'use strict' 

const repository = require('../repositories/order-repository'); //Repositorio
const guid = require('guid'); //pra gerar numeros aleatorios

exports.get = async(req, res, next) =>{
    try{ // tem que usar try-catch pra tratar
        var data = await repository.get(); //Ascync
        res.status(201).send(data);  
    }catch( e ){
        res.status(500).send({
            message: 'Falha ao listar pedidos!',
            date:  e
        });  
    };  
};

exports.post = async(req, res, next) =>{ // Usando Ascync para esperar a resposta
    
    try{ // tem que usar try-catch pra tratar
        await repository.post({
            customer: req.body.customer,
            number: guid.raw().substring(0,6),
            items: req.body.items
        }); //Ascync

        res.status(201).send({
            message: 'pedido efeituado com sucesso!'
        });  
    }catch( e ){
        res.status(500).send({
            message: 'Falha ao cadastrar Cliente!',
            date:  e
        });  
    };  
};