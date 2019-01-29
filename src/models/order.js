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