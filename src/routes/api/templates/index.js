import {Template} from '$lib/mongoose/model/template';
import { certIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'

// POST api/template (neues Template erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    const template = new Template({
        ...request.body,
        cert_id: getStoreValue(certIdStore)
    })
     const temp = await template.save()

     return {
         body: {
             temp
         }
     };
}