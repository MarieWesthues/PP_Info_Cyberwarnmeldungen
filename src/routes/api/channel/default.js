import {Channel} from '$lib/mongoose/model/channel';
import { certIdStore } from '$lib/stores';
import { get } from 'svelte/store';

// POST api/alerts (neue Warnmeldung erstellen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(request) { 


    const discord = new Channel({
        name: 'Discord',
        colors: {
            primary: '#5865F2',
            onPrimary: 'white'
        },
        logo: 'https://discord.com/assets/145dc557845548a36a82337912ca3ac5.svg',
        messageFormat: 'json',
        authenticated: false,
    })

     const res = await discord.save()

     return {
         body: {
             res
         }
     };
}