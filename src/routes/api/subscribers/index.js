import {Subscriber} from '$lib/mongoose/model/subscriber';

import { certIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'


// POST api/subscriber (neuen Subscriber erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
       const subscriber = new Subscriber({
           ...request.body,
           cert_id: getStoreValue(certIdStore)
       })

        const res = await subscriber.save()

		return {
			body: {
				res
			}
		};
}

// GET api/subscriber (eine Liste von allen subscribern erhalten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const subscribers = await Subscriber.find({})

     return {
         body: subscribers
     };
}