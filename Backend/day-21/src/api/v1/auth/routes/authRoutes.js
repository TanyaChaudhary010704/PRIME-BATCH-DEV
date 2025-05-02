const { sendOtpController } = require("../controllers/sendOtpController.js");
const express = require("express");

const authRouter = express.Router();
authRouter.post("/otps", sendOtpController);

module.exports = { authRouter };
