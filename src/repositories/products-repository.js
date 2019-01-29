'use strict' 

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () =>{
    return Product.find({
        active: true
    },
    'title price slug');
}

exports.getBySlug = (slug) => {
    return Product.findOne({ 
        active: true,
        slug: slug},
        'title description price slug tags'
    );
}

exports.getById = (id) => {
    return Product.findById(id);
}

exports.getByTags = (tag) => {
    return Product.find({
        tags: tag,
        active: true,
    },
    'title description price slug tags'
    );
}

exports.post = (body) => {
    var product = new Product(body); //Instancia de um produto
    return product.save();
}

exports.put = (id, body) => {
    return Product.findByIdAndUpdate(id,{
        $set: {
            title: body.title,
            description: body.description,
            price: body.price,
        }
    });
}



exports.delete = (id) => {
    return Product.findOneAndDelete(id);
}