import {Subscriber} from '$lib/model';


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
         body: {
             subscribers
         }
     };
}

// POST api/subscriber (neuen Subscriber erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {

    const res = await Subscriber.findByIdAndUpdate(request.params._id, request.body, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });

     return {
         body: {
             res
         }
     };
}

