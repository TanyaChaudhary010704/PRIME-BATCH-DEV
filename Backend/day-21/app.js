require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const {
  productRouter,
} = require("./src/api/v1/products/routes/product-routes.js");
const { authRouter } = require("./src/api/v1/auth/routes/authRoutes.js");
const { dbConnect } = require("./src/config/db.js");

const port = 2200;
const app = express();
dbConnect();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/products", productRouter); // mount the product router on the specified path
app.use("/api/v1/auth", authRouter); // mount the product router on the specified path

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
