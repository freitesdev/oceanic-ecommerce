const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true,
        min: 0
    },
    status:{
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: new Date()
    },
    address:{
        type: String,
        required: true
    }
}, {
    timestamps: true,
})
module.exports = Product = mongoose.model('order', OrderSchema);