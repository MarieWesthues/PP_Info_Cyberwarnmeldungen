import {Subscriber} from '$lib/mongoose/model/subscriber';

// PUT api/subscriber   (Benutzerdaten überarbeiten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
    const {id} = request.params;
    
    let temp = Subscriber.findById(id)
    let subscriber = await Subscriber.findById(id).update(request.body)
    
    return {
        body: temp
    }
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function del(request) {
    const {id} = request.params;
    let subscriber = await Subscriber.findByIdAndRemove(id)

    return {
        body: "User gelöscht"
    }
}

// GET api/subscriber/id get specific subscriber by id
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request) {
    const {id} = request.params;

    let subscriber = await Subscriber.findById(id).exec()

    // no return is equal to 404
    if (subscriber){
        return {
            body: subscriber
        }
    }
}