import {Template} from '$lib/mongoose/model/template';

// POST api/template (neues Template erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    const template = new Template(request.body)
     const temp = await template.save()

     return {
         body: {
             temp
         }
     };
}

