const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255
    },
    age: {
        type: Number,
        min: 18,
        max: 120
    },
    status: {
        type: Boolean,
        default: false
    },
    role: {
        type: Number,
        default: 0
    },
    banned: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
})
module.exports = User = mongoose.model('user', UserSchema);
