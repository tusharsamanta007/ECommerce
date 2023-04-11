const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    priviledge:{
        type: String
    }
});

module.exports = mongoose.model('Users', userSchema);