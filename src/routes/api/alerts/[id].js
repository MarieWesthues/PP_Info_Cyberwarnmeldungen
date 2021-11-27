import {PendingAlert} from '$lib/mongoose/model/alert';

// PUT api/alerts (Warnmeldungen verändern)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
       const {id} = request.params;
       let pendingAlert = await PendingAlert.findById(id).update(request.body)
       
       return {
           body: "Testi Test"
       }
   }

// Warnmeldungen löschen
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function del(request) {
    const {id} = request.params;
    let pendingAlert = await PendingAlert.findByIdAndRemove(id)

    return {
        body: "efojofejofjfw"
    }
}  

// GET api/alerts/id (Gezielte PendingAlerts finden)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request) {
    const {id} = request.params;

    let pendingAlert = await PendingAlert.findById(id).exec()


    if (pendingAlert){
        return {
            body: pendingAlert
        }
    }
}