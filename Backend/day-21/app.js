require('dotenv').config(); // Load environment variables from .env file
require("./src/config/db.js"); // Import the database configuration
const express = require('express');
const morgan = require('morgan');
const {productRouter} = require('./src/api/v1/products/routes/product-routes.js');
const port = 2200;
const app = express();

app.use(morgan('dev')) // morgan is a middleware that logs the request details

app.use("/api/v1/products", productRouter); // mount the product router on the specified path

app.listen(port, () => { 
  console.log(`App is running on port ${port}`);
})