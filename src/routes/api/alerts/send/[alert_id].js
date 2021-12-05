import { postTextMessageReddit } from "$lib/channels/reddit";
import { sendEmailAlert } from "$lib/channels/email";
import { postTextMessageTwitter } from "$lib/channels/twitter";
import { Template } from "$lib/mongoose/model/template";
import { certIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'
import { PendingAlert } from "$lib/mongoose/model/alert";
import populateTemplate from "$lib/populate";


// POST api/subscriber (neuen Subscriber erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    
    // Find relevant Alert in PendingAlerts
    const alert = await PendingAlert.findById(request.params.alert_id);

    if (alert) {
        // console.log(alert);
    }

    const matches = {
        level: alert.threatLevel,
        type: alert.threatType
    }
    const cert_id = getStoreValue(certIdStore);

    for (let channel of alert.selectedChannels){
        const template = await Template.chooseTemplate(cert_id, channel, matches)
        
        if (template) {
            const populatedTemplate = populateTemplate(template, alert)
            console.log(populatedTemplate);
        }
    }


    // const template = await Template.chooseTemplate(
    //     getStoreValue(certIdStore), 
    //     'Email', 
    //     {level: alert.threatLevel, type: alert.threatType}
    // )

    // make alert persistend

    // console.log(template);
     return {
         body: {
             mkay: "mkay"
         }
     };
}