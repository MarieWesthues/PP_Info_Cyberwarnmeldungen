import {Configuration} from '$lib/mongoose/model/configuration';

// POST api/configuraiton (neue Configuration anlegen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    const configuration = new Configuration(request.body)

     const res = await configuration.save()

     return {
         body: {
             res
         }
     };
}
