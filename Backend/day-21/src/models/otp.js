const mongoose = require("mongoose");
const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    otp: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const otpModel = mongoose.model("otp", otpSchema); // Create a model named "otps" using the otpSchema
module.exports = { otpModel }; // Export the otpModel for use in other files
