import {Group} from '$lib/mongoose/model/subscriber';

// PUT api/group/id GruppenWerte überschreiben
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(request) {
    const {id} = request.params;

    let group = await Group.findById(id).update(request.body)  //Zuerst wird die Gruppe via ID rausgesucht und die Werte werden geändert
    let temp = await Group.findById(id)   //Verändertes Doc wird als temp zwischengespeichert und in Return ausgegeben

    const addSubscriberToGroup = function(groupID, subscriber) {
        return Group.findByIdAndUpdate(groupID, 
            {$push: {subscriber : subscriber._id} },
            {new:true, useFindAndModify: false}
            );
    }

    return {
        body: temp
    }
}

// DELETE api/group/id Gruppe löschen
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function del(request) {
    const {id} = request.params;
    let group = await Group.findByIdAndRemove(id)

    return {
        body: "Klappt das?!"
    }
}


// GET api/group/id (Nach IDs die Gruppe suchen)
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(request) {
    const {id} = request.params;

    let group = await Group.findById(id).populate({path: 'subscribers' , model: 'Subscriber'}).exec()

    // no return is equal to 404
    if (group){
        return {
            body: group
        }
    }
}