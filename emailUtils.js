const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth:{
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS
  }
})


const sendEmail = (to, subject, text, html) =>{
  return new Promise((resolve,reject)=>{
    const mailOptions = {
      from: `"BIT FLUX CAPITAL" <${process.env.EMAIL_USER}`,
      to,
      subject,
      text,
      html,
    };

    transporter.sendMail(mailOptions, (error,info) =>{
      if(error){
        console.error("Error sent",info.response);
        reject(error);
      }else{
        console.log("Email sent", info.response);
        resolve(info.response)
      }
    })
  })
}
module.exports = sendEmail