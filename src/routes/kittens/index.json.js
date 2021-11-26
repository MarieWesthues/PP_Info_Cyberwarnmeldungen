import {Kitten} from '$lib/model';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
       
        const cat = new Kitten({
            name: request.body.name
        })

        const res = await cat.save()

        console.log(res);

		return {
			body: {
				cat
			}
		};
}