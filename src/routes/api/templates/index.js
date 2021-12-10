import {Template} from '$lib/mongoose/model/template';
import { certIdStore } from '$lib/stores';
import {get as getStoreValue} from 'svelte/store'

// POST api/template (neues Template erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) {
    const template = new Template({
        ...request.body,
        cert_id: getStoreValue(certIdStore)
    })
     const temp = await template.save()

     return {
         body: {
             temp
         }
     };
}


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request){
    // request.query ist of type UrlSearchParams and we have to convert it to json to use as mongoose filter.
    const filter = Object.fromEntries(request.query);
    
    const templates = await Template.find({...filter, cert_id: getStoreValue(certIdStore)}).exec();
    return {
        body : templates
    }
}