const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50
        },
        description: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 200
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        category: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
        },
        voltage: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
        },
        available: {
            type: Number,
            min: 0,
            default: 1
        },
        size: {
            type: String
        },
        weigth: {
            type: Number,
            default: 0
        },
        date: {
            type: Date,
            default: new Date(),
        },
    },
    {
        timestamps: true,
    }
);
module.exports = Product = mongoose.model('product', ProductSchema);