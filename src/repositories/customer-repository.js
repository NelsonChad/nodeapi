'use strict' 

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = () =>{
    return Customer.find();
}

exports.post = (body) => {
    var customer = new Customer(body); //Instancia de um customer
    return customer.save();
}