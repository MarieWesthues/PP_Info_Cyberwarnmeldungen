// import { postTextMessage } from "$lib/channels/reddit";
import { sendEmailAlert } from "$lib/channels/email";
import { postTextMessage } from "$lib/channels/twitter";


// POST api/subscriber (neuen Subscriber erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    
    postTextMessage("yeah Boiiiiiiiiiiiii", "sheeeeeeeeeeeeeeesh")
    // sendEmailAlert()

     return {
         body: {
             mkay: "mkay"
         }
     };
}