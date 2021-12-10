import { certIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'


// GET api/channel (Channel Übersicht erhalten)

import { Cert } from '$lib/mongoose/model/cert';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params, body }) {
    
    console.log(body.id);
    // https://mongoosejs.com/docs/subdocs.html#finding-a-subdocument
    const cert = await Cert.findById(getStoreValue(certIdStore))
    let attribute = await cert.configuration.messageAttributes.id(body.id)
    // let attribute = await query.exec()
     return {
         body: attribute
     };
}