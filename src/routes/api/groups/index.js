import {Group} from '$lib/mongoose/model/subscriber';

// POST api/group (neue Gruppe erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    const group = new Group(request.body)

     const res = await group.save()

     return {
         body: {
             res
         }
     };
}

// GET api/group (eine Liste von allen gruppen erhalten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {

    const groups = await Group.find({})

     return {
         body: groups
     };
}
