import {Channel} from '$lib/mongoose/model/channel';

// GET api/channel (Channel Übersicht erhalten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    console.log("Nein");
    const channels = await Channel.find({})

     return {
         body: channels
     };
}


// POST api/subscriber (neuen Channel anlegen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    const channel = new Channel(request.body)

     const res = await channel.save()

     return {
         body: {
             res
         }
     };
}
