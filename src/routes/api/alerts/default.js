import {PendingAlert} from '$lib/mongoose/model/alert';
import { certIdStore, userIdStore } from '$lib/stores';
import { get } from 'svelte/store';

// POST api/alerts (neue Warnmeldung erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) { 

    

    const pendingAlert = new PendingAlert({
        ...request.body,
        dateCreated: new Date(),
        threatLevel: '1',
        threatType: 'Virus',
        title: 'Tittel Schmittel',
        intern: false,
        actions: "asdafsdf",
        assessment: "asdfasdfasd",
        incident: "asdfasd fasdf",
        attributes: [
            {key: 'Remote', value: false},
            {key: 'OS', value: ['Windows']},
            {key: 'Moped Grad', value: 'kleines Moped'}
        ],
        createdBy: get(userIdStore),
        selectedChannels: ['Email', 'Reddit', 'Twitter'],
        selectedGroups: [],
        cert_id: get(certIdStore),
    })

     const res = await pendingAlert.save()

     return {
         body: {
             res
         }
     };
}