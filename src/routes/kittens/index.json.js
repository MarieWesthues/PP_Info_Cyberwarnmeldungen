import {Kitten} from '$lib/mongoose/model/kitten';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
       
        const cat = new Kitten({
            name: request.body.name
        })

        const res = await cat.save()


		return {
			body: {
				cat
			}
		};
}