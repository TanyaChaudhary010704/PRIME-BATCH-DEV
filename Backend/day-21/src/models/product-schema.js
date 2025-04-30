const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  price: Number,
  stock: {
    type: Number,
    default: 1,
    min:0,
  },
  tags: {
    type:[String]
  }
})
const ProductModel = mongoose.model("products", productSchema); // Create a model named "products" using the productSchema
module.exports = { ProductModel }; // Export the ProductModel for use in other files