import {Template} from '$lib/mongoose/model/template';

// POST api/subscriber (neuen Subscriber erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    const subscriber = new Template(request.body)
     const res = await subscriber.save()

     return {
         body: {
             res
         }
     };
}