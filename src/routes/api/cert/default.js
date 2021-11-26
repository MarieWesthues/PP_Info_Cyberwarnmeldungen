// import { postTextMessage } from "$lib/channels/reddit";
import { sendEmailAlert } from "$lib/channels/email";
import { postTextMessage } from "$lib/channels/twitter";
import { defaultConfiguration } from "$lib/mongoose/model/configuration";
import { defaultChannels } from "$lib/mongoose/model/channel";
import { Cert } from "$lib/mongoose/model/cert";


// POST api/subscriber (neuen Subscriber erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    
    const cert = new Cert({
        configuration: defaultConfiguration,
        channels: defaultChannels,
    })

    const res = await cert.save()

     return {
         body: res
     };
}