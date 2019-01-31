'use strict' 

const express = require('express');
const router = express.Router(); //cria routas
const orderController = require('../controllers/order-controller')

//Cria uma routas
router.get('/', orderController.get);
router.post('/', orderController.post);

module.exports = router;