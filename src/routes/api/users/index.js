import { certIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'
import { User } from '$lib/mongoose/model/user';


// Neues User Object erstellen
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) { 

    const cert_id = getStoreValue(certIdStore);
    const user = new User({
        ...request.body,
        cert_id
    })
    const res = await user.save()

     return {
         body: {
             res
         }
     };
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request) {

    const pendingAlerts = await User.find({cert_id:  getStoreValue(certIdStore)})

     return {
         body: pendingAlerts
     };
}