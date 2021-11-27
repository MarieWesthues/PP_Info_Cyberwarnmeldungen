import { postTextMessageReddit } from "$lib/channels/reddit";
import { sendEmailAlert } from "$lib/channels/email";
import { postTextMessageTwitter } from "$lib/channels/twitter";


// POST api/subscriber (neuen Subscriber erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    
    postTextMessageReddit("yeah Boiiiiiiiiiiiii", "sheeeeeeeeeeeeeeesh")
    sendEmailAlert()
    postTextMessageTwitter("Textblock","Titel")

     return {
         body: {
             mkay: "mkay"
         }
     };
}