import {Channel} from '$lib/mongoose/model/channel';

// GET api/channel (Channel Übersicht erhalten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {

    // const channels = await Channel.find({params})

     return {
         body: [{cert_id: 234523452345}, {cert_id: 234523452345}]
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
