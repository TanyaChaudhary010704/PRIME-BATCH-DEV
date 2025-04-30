const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file
console.log(process.env.MONGO_DB_URL);
mongoose
  .connect(process.env.MONGO_DB_URL, {
    dbName: "PRIME-ABES-22",
    // socketTimeoutMS: 60000,
    // connectTimeoutMS: 60000,
    // timeoutMS: 60000,
    // maxIdleTimeMS: 60000,
    // useNewUrlParser: true,
    // useUnifiedTopology: true, // Close sockets after 30 seconds of inactivity
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("DB connection error");
    console.log(err.message);
    console.log("-------------------------");
  });
