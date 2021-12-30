import {PersistedAlert} from '$lib/mongoose/model/alert';


// GET api/alerts/id (Gezielte Pending bzw PersistedAlerts finden)
/** @type {import('@sveltejs/kit').RequestHandler} */
/**export async function get(request) {
    const {id} = request.params;

    let persistedAlert = await PersistedAlert.findById(id).exec()
    
    if (persistedAlert){
        return {
            body: persistedAlert
        }
    }
} */

export async function get(request) {
    const {id} = request.params;

    let pAlert = await PersistedAlert.findById(id).populate({path: 'selectedGroups' , model: 'Group'}).exec()

    // no return is equal to 404
    if (pAlert){
        return {
            body: pAlert
        }
    }
}