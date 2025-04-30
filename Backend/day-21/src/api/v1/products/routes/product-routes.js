const express = require('express');
const { getProductsController } = require('../controllers/getProductsController.js'); // Import the controller function
const { addProductsController } = require('../controllers/addProductsController.js'); // Import the controller function
const { validateAddProductDto } = require('../dto/validateAddProductDto.js'); // Import the validation middleware
productRouter = express.Router();
productRouter.get("/", getProductsController);
productRouter.post("/addProduct",validateAddProductDto, addProductsController);
module.exports = {productRouter};