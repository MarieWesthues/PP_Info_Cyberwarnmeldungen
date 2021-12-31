import { postTextMessageReddit } from "$lib/channels/reddit";
import { sendEmailAlert } from "$lib/channels/email";
import { postTextMessageTwitter } from "$lib/channels/twitter";
import { Template } from "$lib/mongoose/model/template";
import { certIdStore, userIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'
import { PendingAlert, PersistedAlert } from "$lib/mongoose/model/alert";
import populateTemplate from "$lib/populate";
import { sendAlert } from "$lib/channels";
import { Cert } from "$lib/mongoose/model/cert";


// POST api/subscriber (neuen Subscriber erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {

    // Find relevant Alert in PendingAlerts
    const alert = await PendingAlert.findById(request.params.alert_id).lean();

    if (alert) {

    }

    const matches = {
        level: alert.threatLevel,
        type: alert.threatType
    }
    const cert_id = getStoreValue(certIdStore);

    // Step 0) Color map für Threat Level Farben erstellen

    const attributes = alert.attributes;
    // Mandatory props adden
    attributes.threatLevel = alert.threatLevel;
    attributes.threatType = alert.threatType;
    attributes.title = alert.title;
    attributes.assessment = alert.assessment;
    attributes.incident = alert.incident;
    attributes.actions = alert.actions;

    // get the threatLevelColor
    const cert = await Cert.findById(cert_id)
    attributes.threatLevelColor = cert.configuration.threatLevels.find(tl => tl.name === alert.threatLevel).color;

    // Step 1) Templates raussuchen
    // Step 2) nachrichten senden
    for (let channelName of alert.selectedChannels){

        const template = await Template.chooseTemplate(cert_id, channelName, matches)

        if (template) {
            const populatedTemplate = populateTemplate(template, attributes)
            // should return promise with link to created post
            sendAlert(channelName, populatedTemplate, alert)
        }
    }
    // Step 3 pendingAlert removen
    await PendingAlert.deleteOne({_id: alert._id})
    delete alert._id

    // Weitere Felder zum persistedAlert adden
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