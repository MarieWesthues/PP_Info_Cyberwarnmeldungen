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