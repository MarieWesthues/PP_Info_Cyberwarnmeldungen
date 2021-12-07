import {Group} from '$lib/mongoose/model/subscriber';
import { certIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'

// POST api/group (neue Gruppe erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    const group = new Group({
        ...request.body,
        cert_id: getStoreValue(certIdStore)
    })

     const res = await group.save()

     return {
         body: {
             res
         }
     };
}

// GET api/group (eine Liste von allen gruppen erhalten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request) {

    const groups = await Group.find(request.body).exec()

     return {
         body: groups
     };
}
