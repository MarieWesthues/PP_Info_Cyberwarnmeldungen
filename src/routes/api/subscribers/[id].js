import {Subscriber} from '$lib/mongoose/model/subscriber';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {

}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function del(request) {

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