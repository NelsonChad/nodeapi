'use strict' 

const express = require('express');
const router = express.Router(); //cria routas
const customerController = require('../controllers/customer-controller')

//Cria uma routas
router.get('/', customerController.get);
router.post('/', customerController.post);

module.exports = router;