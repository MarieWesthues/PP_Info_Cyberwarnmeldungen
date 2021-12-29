import {Subscriber} from '$lib/mongoose/model/subscriber';

// PUT api/subscriber   (Benutzerdaten überarbeiten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
    const {id} = request.params;
    
    const updatedSubscriber = await Subscriber.findOneAndUpdate({_id: id}, request.body, {new: true})

    // save the subscriber to trigger the middleware
    await updatedSubscriber.save();

    if (updatedSubscriber){
        return {
            body: updatedSubscriber
        }
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

    // Do NOT populate groups because that would break the group dropdown in the subscriber editor
    let subscriber = await Subscriber.findById(id).exec()
    // no return is equal to 404
    if (subscriber){
        return {
            body: subscriber
        }
    }
}


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    // Find Subsriber
    const subscriber = await Subscriber.findById(request.params._id).lean();

     return {
         body: {
             mkay: "mkay"
         }
     };
}