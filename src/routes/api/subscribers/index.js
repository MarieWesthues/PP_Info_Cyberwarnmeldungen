import {Subscriber} from '$lib/mongoose/model/subscriber';


// POST api/subscriber (neuen Subscriber erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
       const subscriber = new Subscriber(request.body)

        const res = await subscriber.save()

		return {
			body: {
				res
			}
		};
}

// GET api/subscriber (eine Liste von allen subscribern erhalten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const subscribers = await Subscriber.find({})

     return {
         body: subscribers
     };
}