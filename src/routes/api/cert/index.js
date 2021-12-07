// import { postTextMessage } from "$lib/channels/reddit";
import { sendEmailAlert } from "$lib/channels/email";
import { postTextMessageTwitter } from "$lib/channels/twitter";
import { defaultConfiguration } from "$lib/mongoose/model/configuration";
import { defaultChannels } from "$lib/mongoose/model/channel";
import { Cert } from "$lib/mongoose/model/cert";
import { createDefaultTemplates, Template } from "$lib/mongoose/model/template";


// POST api/subscriber (neuen CERT anlegen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    
    const certModel = new Cert({
        configuration: defaultConfiguration,
        channels: defaultChannels,
    })
    const certDocument = await certModel.save()


    const defaultTemplates = createDefaultTemplates(certDocument.id)
    // console.log(defaultTemplates);
    Template.insertMany(defaultTemplates)


     return {
         body: certDocument
     };
}

