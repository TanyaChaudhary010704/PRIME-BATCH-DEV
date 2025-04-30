const {ProductModel} = require("../../../../models/product-schema.js")
const getProductsController = async(req, res) => {
  const productList = await ProductModel.find();
  console.log("Request received");
  res.send({
    status: "success",
    data: {
      products:productList,
    },
  })
};
module.exports = { getProductsController };