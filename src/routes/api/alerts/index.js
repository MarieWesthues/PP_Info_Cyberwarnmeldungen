import {PendingAlert} from '$lib/mongoose/model/alert';
import { certIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'

// POST api/alerts (neue Warnmeldung erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) { 

    

    const pendingAlert = new PendingAlert(request.body)

     const res = await pendingAlert.save()

     return {
         body: {
             res
         }
     };
}

// GET api/alert (Liste von Warnmeldungen erhalten bezogen auf CERT ID)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request) {

    const pendingAlerts = await PendingAlert.find({cert_id:  getStoreValue(certIdStore)})

     return {
         body: pendingAlerts
     };
}

