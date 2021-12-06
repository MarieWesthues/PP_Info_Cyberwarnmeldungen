import {Channel} from '$lib/mongoose/model/channel';

// PUT api/channel (Channel Infos updaten)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
       const {id} = request.params;
       let channel = await Channel.findById(id).update(request.body)
       let temp = await Channel.findById(id)
       
       return {
           body: temp
       }
   }