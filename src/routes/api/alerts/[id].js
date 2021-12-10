import {PendingAlert} from '$lib/mongoose/model/alert';

// PUT api/alerts (Warnmeldungen verändern)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
       const {id} = request.params;

       const updatedAlert = await PendingAlert.findOneAndUpdate({_id: id}, request.body, {new: true})
       return {
           body: updatedAlert
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

    let pendingAlert = await PendingAlert.findById(id).exec()


    if (pendingAlert){
        return {
            body: pendingAlert
        }
    }
}