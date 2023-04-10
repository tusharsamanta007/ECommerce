const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    imageUrl:{
        type:String
    },
    productName:{
        type:String
    },
    productPrice:{
        type:String
    },
    stock:{
        type:String
    },
    discount:{
        type:String
    },
    category:{
        type:String
    }
});

module.exports = mongoose.model('Products', productSchema);