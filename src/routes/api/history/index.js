import {PersistedAlert} from '$lib/mongoose/model/alert';

// GET api/alert (Liste von Warnmeldungen erhalten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {

    const persistedAlerts = await PersistedAlert.find({})

     return {
         body: persistedAlerts
     };
}