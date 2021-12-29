import { sendEmailAlert } from "./email";
import { sendRedditAlert } from "./reddit";
import { sendTwitterAlert } from "./twitter";


export function sendAlert(channelName, alertText, alertObject){
    // Erstmal auskommentiert lassen pls

    // switch(channelName){
    //     case 'Reddit':
    //         sendRedditAlert(alertText, alertObject)
    //         break;
    //     case 'Twitter':
    //         sendTwitterAlert(alertText, alertObject)
    //         break;
    //     case 'Email':
    //         sendEmailAlert(alertText, alertObject)
    //         break;
    //     default: 
    //         throw {name: "sendAlert failed", message: "The channelName you provided does not match any of the supported channels"}
    // }
}