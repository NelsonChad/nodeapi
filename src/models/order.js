'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    number: {
        type: String,
        required: true,
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now //seta data automaticamente
    },
    status: {
        type: String,
        required: true,
        enum: ['created','done'],
        default: 'created'
    },
    customer: { //Referencias a outro documento
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    items: [{ //um array de items/produtos
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProductS'
        },
    }],
}); 
module.exports = mongoose.model('Order', schema); 

/**
 * Exeplo de insercao
 * 
    {
        "customer": "5c50b943a698836d04996761",
        "items": [
            {"quantity":"1", "price":"12099","product":"5c50a97127fdb157542d23a9"},
            {"quantity":"2", "price":"3000","product":"5c50a99827fdb157542d23aa"}
        ]
    }
 */