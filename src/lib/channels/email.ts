import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: process.env['SENDGRID_USER'],
    pass: process.env['SENDGRID_PASSWORD']
  }
});



export async function sendEmailAlert(){

  let info = await transporter.sendMail({
      from: '"Cert Praxis Projekt" <certpraxisprojekt@gmail.com>', // sender address
      to: "imigstefan@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

}
