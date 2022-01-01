import { sendEmailAlert } from "./email";
import { sendRedditAlert } from "./reddit";
import { sendTwitterAlert } from "./twitter";


export function sendAlert(channelName, alertText, alertObject){

   // console.log(`Send ${channelName}-Alert:`);
   // console.log(alertText);

   const sendFuncDict = {
      'Reddit': sendRedditAlert,
      'Twitter': sendTwitterAlert,
      'Email': sendEmailAlert
   }

   const send = sendFuncDict[channelName];
   if (!send) {
      throw {name: "sendAlert failed", message: "The channelName you provided does not match any of the supported channels"}
   }

   return send(alertText, alertObject)


   //  switch(channelName){
   //      case 'Reddit':
   //          sendRedditAlert(alertText, alertObject)
   //          break;
   //      case 'Twitter':
   //          sendTwitterAlert(alertText, alertObject)
   //          break;
   //      case 'Email':
   //          sendEmailAlert(alertText, alertObject)
   //          break;
   //      default: 
            
   //  }
}