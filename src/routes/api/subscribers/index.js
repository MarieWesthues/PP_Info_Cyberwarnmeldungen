import {Subscriber} from '$lib/mongoose/modelose/model';


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
    console.log("bruh wtf");
    const subscribers = await Subscriber.find({})

     return {
         body: subscribers
     };
}



