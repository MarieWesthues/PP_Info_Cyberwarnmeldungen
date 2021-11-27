import {Template} from '$lib/mongoose/model/template';

// GET api/templates (nach Templates/Keys suchen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request) {
    const {id} = request.params;

    let template = await Template.findById(id).exec()

    if (template){
        return {
            body: template
        }
    }
}

// DELETE api/template  (Template löschen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function del(request) {
    const {id} = request.params;
    let template = await Template.findByIdAndRemove(id)

    return {
        body: "Klappt das?!"
    }
}

// PUT api/Template (Template überschreiben)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
       const {id} = request.params;
       let template = await Template.findById(id).update(request.body)
       
       return {
           body: "Testi Test"
       }
   }