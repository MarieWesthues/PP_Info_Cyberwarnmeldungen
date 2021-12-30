import { postTextMessageReddit } from "$lib/channels/reddit";
import { sendEmailAlert } from "$lib/channels/email";
import { postTextMessageTwitter } from "$lib/channels/twitter";
import { Template } from "$lib/mongoose/model/template";
import { certIdStore, userIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'
import { PendingAlert, PersistedAlert } from "$lib/mongoose/model/alert";
import populateTemplate from "$lib/populate";
import { sendAlert } from "$lib/channels";


// POST api/subscriber (neuen Subscriber erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    console.log("soooos");
    // Find relevant Alert in PendingAlerts
    const alert = await PendingAlert.findById(request.params.alert_id).lean();

    if (alert) {
        // console.log(alert);
    }

    const matches = {
        level: alert.threatLevel,
        type: alert.threatType
    }
    const cert_id = getStoreValue(certIdStore);

    // Step 1) Templates raussuchen
    // Step 2) nachrichten senden
    for (let channelName of alert.selectedChannels){

        const template = await Template.chooseTemplate(cert_id, channelName, matches)

        if (template) {
            const populatedTemplate = populateTemplate(template, alert)
            // should return promise with link to created post
            sendAlert(channelName, populatedTemplate, alert)
        }
    }
    // Step 3 pendingAlert removen
    await PendingAlert.deleteOne({_id: alert._id})
    delete alert._id

    const persistedAlertData = {
        ...alert,
        dateSend: new Date(),
        authorizedBy: getStoreValue(userIdStore),
    }

    const persistedDocument = new PersistedAlert(persistedAlertData);
    persistedDocument.save();
    // const template = await Template.chooseTemplate(
    //     getStoreValue(certIdStore), 
    //     'Email', 
    //     {level: alert.threatLevel, type: alert.threatType}
    // )

    // make alert persistend

     return {
         body: {
             mkay: "mkay"
         }
     };
}