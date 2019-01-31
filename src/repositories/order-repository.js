'use strict' 

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async() =>{ //Usando ascync 
    var res = await Order.find({}); // ascync
    return res;
}

exports.post = async(body) => {
    var order = new Order(body);
    await order.save();
}