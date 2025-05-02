const { sendOtpMail } = require("../../../../utils/emailHelper");
const { otpModel } = require("../../../../models/otp");
const bcrypt = require("bcryptjs");

const sendOtpController = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(Math.random() * 9000 + 1000);

    await sendOtpMail({ otp, email });

    const salt = await bcrypt.genSalt(10);
    console.log("salt", salt);

    const hash = await bcrypt.hash(otp + "", salt);
    console.log("hash", hash);

    otpModel.create({
      email: email,
      otp: hash,
    });

    res.status(201);
    res.json({
      status: "success",
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.log("-------------------------");
    console.log("Error in sendOtpController", error.message);
    console.log("-------------------------");

    res.status(500);
    res.json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};
module.exports = { sendOtpController };
