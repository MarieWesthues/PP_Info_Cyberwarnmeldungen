import {Template} from '$lib/mongoose/model/template';

// GET api/templates (nach Templates nach Namen/Werten suchen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request) {
    const {id} = request.params;
  //  let inputName = request.body

    let template = await Template.find(request.body).exec()  

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
        body: "Template gelöscht"
    }
}

// PUT api/Template (Template überschreiben)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
       const {id} = request.params; //holt sich das doc zu der ID

       let template = await Template.findById(id).update(request.body)  //Verändert die Werte des docs

       let temp2 = await Template.findById(id).exec() //Speichert das geänderte Doc als temp2

       if (template){
           return {
               body: temp2      //gebt das gesamte doc aus inkl veränderungen
           }
       }
   }