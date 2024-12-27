const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// product schema
const productSchema = new Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
    description:{
        type:String,
    }
},{timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;