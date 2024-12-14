const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,  // Try using port 587 for TLS connection
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


const sendEmail = (to, subject, text, html) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      // from: {
      //   name: "Centrallnationalbank",
      //   address: process.env.EMAIL_USER,
      // },
      from: `"Central National Bank" <${process.env.EMAIL_USER}>`, // Display name masks the email

      to,
      subject,
      text,
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        reject(error);
      } else {
        console.log("Email sent:", info.response);
        resolve(info.response);
      }
    });
  });
};

module.exports = sendEmail;
