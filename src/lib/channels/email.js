import { Group, Subscriber } from '$lib/mongoose/model/subscriber';
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



// export async function sendEmailAlert(){

//   let info = await transporter.sendMail({
//       from: '"Cert Praxis Projekt" <certpraxisprojekt@gmail.com>', // sender address
//       to: "imigstefan@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });

// }

export async function sendEmailAlert(text, alertObject){
  console.log(text);

  // gette alle subscriber die in groups sind
  // console.log(alertObject);

  // const groups = await Group.find({'_id': {$in: alertObject.selectedGroups}}).populate('subscribers')

  let subscribers = await Subscriber.find({groups: {$in: alertObject.selectedGroups}})

  if (alertObject.intern){
    subscribers = subscribers.filter( s=> s.intern)
  }

  console.log(subscribers);

  subscribers.forEach((subscriber)=>{
    transporter.sendMail({
      from: '"Cert Praxis Projekt" <certpraxisprojekt@gmail.com>', // sender address
      to: subscriber.email, // list of receivers
      subject: alertObject.title, // Subject line
      text: "Hello world?", // plain text body
      html: text, // html body
    });
  })

  // let info = await transporter.sendMail({
  //   from: '"Cert Praxis Projekt" <certpraxisprojekt@gmail.com>', // sender address
  //   to: "imigstefan@gmail.com", // list of receivers
  //   subject: "Hello ✔", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: "<b>Hello world?</b>", // html body
  // });
}