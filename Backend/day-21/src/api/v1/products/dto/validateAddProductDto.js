const validateAddProductDto = (req,res,next) => {
  try {
    console.log("Validating create product request");
    const { title, price } = req.body;
    if(title === undefined || title === null || typeof(title)!=="string" || title.length<2) {
      throw new Error("Title is invalid");
    }
    if(price === undefined || price === null || Number(price)===NaN) {
      throw new Error("Price is invalid");
    }
    if((stock !== undefined && stock !== null) && (Number(price)===NaN || Number(stock)<0)) {
      throw new Error("Stock is invalid");
    }
  } catch (error) {
    res.status(400);
    res.json({
      status: "fail",
      message: error.message,
    });
  }
}
module.exports = { validateAddProductDto };