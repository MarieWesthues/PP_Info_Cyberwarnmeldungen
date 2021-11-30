import {PendingAlert} from '$lib/mongoose/model/alert';

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

// GET api/alert (Liste von Warnmeldungen erhalten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    console.log("Errorrr");
    const pendingAlerts = await PendingAlert.find({})

     return {
         body: pendingAlerts
     };
}
