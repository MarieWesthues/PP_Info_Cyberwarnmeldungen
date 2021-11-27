import {Configuration} from '$lib/mongoose/model/configuration';

// PUT api/configuration Configuration überschreiben
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
    //   const {id} = request.params;
    //   let configuration = await Configuration.findById(id).update(request.body)
       
       return {
           body: "Testi Test"
       }
   }