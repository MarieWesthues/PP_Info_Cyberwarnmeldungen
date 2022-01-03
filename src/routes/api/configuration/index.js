import { Cert } from '$lib/mongoose/model/cert';
import { certIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() { 
    const cert = await Cert.findById(getStoreValue(certIdStore))
     return {
         body: cert.configuration
     };
}

export async function put(request){
    const cert = await Cert.findById(getStoreValue(certIdStore))
    cert.configuration.messageAttributes = request.body
    cert.save();
    return {
        body: "sos"
    }

}