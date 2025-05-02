const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVICE_USER,
    pass: process.env.EMAIL_SERVICE_PASSWORD,
  },
});

const sendMail = async ({ emails, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: '"Admin App👻" <tanya@gmail.com>',
      to: emails,
      subject: subject,
      html: html,
    });
  } catch (error) {
    console.log("-------------------------------");
    console.log("Could not Send email to :", emails);
    console.log(error.message);
    console.log("-------------------------------");
  }
};

const sendOtpMail = async ({ otp, email }) => {
  await sendMail({
    subject: "Otp Verification @ Admin App",
    emails: [email],
    html: `
    <html>
      <body>
        <div style="display: flex; justify-content: center; align-items: center;background-color: yellow;">
        <div style="padding: 2rem;">
        <h1>OTP Verification</h1>
        <p>Your otp for verification is ${otp}</p>
        </div>
        </div>
      </body>
    </html>
    `,
  });
};
module.exports = { sendOtpMail };
