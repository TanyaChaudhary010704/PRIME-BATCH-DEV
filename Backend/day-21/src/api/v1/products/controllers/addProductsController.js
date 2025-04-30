const {ProductModel} = require("../../../../models/product-schema.js");
const addProductsController = async (req, res) => {
  
  try {
    const newProduct = await ProductModel.create({
      title: "Parle-G",
      price:"10"
    })
    res.status(201);
    res.json({
      success: true,
      message: "Product added successfully",
      data: {
        product: newProduct,
      },
    })
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { addProductsController };