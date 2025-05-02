const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "PRIME-ABES-22",
    });
    console.log("-----DB connected successfully-------");
  } catch (err) {
    console.log("----DB connection error-");
    console.log(err.message);
    console.log("-------------------------");
  }
};
module.exports = { dbConnect };
