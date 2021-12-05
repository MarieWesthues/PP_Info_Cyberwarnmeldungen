import {PendingAlert} from '$lib/mongoose/model/alert';

// PUT api/alerts (Warnmeldungen verändern)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
       const {id} = request.params;
       let pendingAlert = await PendingAlert.findById(id).update(request.body)
       let temp = await PendingAlert.findById(id)
       
       return {
           body: temp
       }
   }

// Warnmeldungen löschen
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function del(request) {
    const {id} = request.params;
    let pendingAlert = await PendingAlert.findByIdAndRemove(id)

    return {
        body: "Warnmeldung wurde gelöscht!"
    }
}  

// GET api/alerts/id (Gezielte PendingAlerts finden) Frag mich grade wofür wir den hier brauchen...
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request) {
    const {id} = request.params;

    let pendingAlert = await PendingAlert.find(request.body).exec()


    if (pendingAlert){
        return {
            body: pendingAlert
        }
    }
}