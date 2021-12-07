import { certIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'

import { Cert } from '$lib/mongoose/model/cert';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {

    const cert = await Cert.findById(getStoreValue(certIdStore))

     return {
         body: cert.channels
     };
}

// This endpoint is not needed
// // POST api/subscriber (neuen Channel anlegen)
// /** @type {import('@sveltejs/kit').RequestHandler} */
// export async function post(request) {
//     const channel = new Channel(request.body)

//      const res = await channel.save()

//      return {
//          body: {
//              res
//          }
//      };
// }
