'use strict' 

const express = require('express');
const router = express.Router(); //cria routas
const productController = require('../controllers/products-controller')

//Cria uma routas
router.get('/', productController.get);
router.get('/:slug', productController.getBySlug);
router.get('/admin/:id', productController.getById);
router.get('/tags/:tag', productController.getByTags);
router.post('/', productController.post);
router.put('/:id', productController.put);
router.delete('/:id', productController.delete);

module.exports = router;
