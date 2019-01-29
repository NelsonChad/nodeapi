'use strict' 
const express = require('express');
const bodyParser = require('body-parser'); //para tratar todas as responses em JSON
const mongoose = require('mongoose');

const app = express(); //cria um objecto express
//const router = express.Router(); //cria routas

//Conecta banco
mongoose.connect('mongodb://chad:nelschads123@ds064718.mlab.com:64718/nodestore', { useNewUrlParser: true });

//Carrega models
const Product = require('./models/products');
//Carrega routas
const indexRoute = require('./routes/index-route');
const productsRoute = require('./routes/products-route');

//Uso do body-parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute); //publica a routa
app.use('/products', productsRoute); //publica a routa

module.exports = app; 