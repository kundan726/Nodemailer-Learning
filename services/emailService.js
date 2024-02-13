const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");

const sendingMail = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("Inside serive of email", email);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_SENDING,
        pass: process.env.EMAIL_SENDING_PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL_SENDING,
      to: email,
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };
    const info = await transporter.sendMail(mailOptions);
    return { msg: "Mail sent" };
  } catch (error) {
    console.log("error in email sending", error);
    throw error; // rethrow the error to be handled by the controller
  }
};

module.exports = sendingMail;
