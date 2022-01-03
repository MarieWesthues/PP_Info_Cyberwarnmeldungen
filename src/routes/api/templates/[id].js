import {Template} from '$lib/mongoose/model/template';

// GET api/templates (nach Templates nach Namen/Werten suchen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request) {
    const {id} = request.params;
    let template = await Template.findById(id)

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
    return {
        body: "Template gelöscht"
    }
}

// PUT api/Template (Template überschreiben)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
       const {id} = request.params; //holt sich das doc zu der ID

       const updatedTemplate = await Template.findOneAndUpdate({_id: id}, request.body, {new: true})

       if (updatedTemplate){
           return {
               body: updatedTemplate      //gebt das gesamte doc aus inkl veränderungen
           }
       }
   }