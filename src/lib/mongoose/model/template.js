import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;

 
const templateSchema = new Schema({
    cert_id: ObjectId,
    channel: String,
    name: String,
    used: Boolean,
    templateString: String,
    usesAttributes: [String],
    default: Boolean,
    matches: {
        type: {type: String},
        level: String,
    },
})


// OS , Remote, Moped Grad
export const Template = mongoose.model('Template', templateSchema); 

const defaultEmailTemplate = {
    channel: 'Email',
    name: 'Default Email Template',
    used: true,
    templateString: 'Moin Leude. Es gibts 1 Threat von type ${threatType} und level ${threatLevel}. Er befällt ${OS} Betriebssysteme',
    usesAttributes: ['OS'],
    default: true,
    matches: {}
}

const defaultRedditTemplate = {
    channel: 'Reddit',
    name: 'Default Reddit Template',
    used: true,
    templateString: 'Moin Leude. Es gibts 1 Threat von type ${threatType} und level ${threatLevel}. Er befällt ${OS} Betriebssysteme',
    usesAttributes: ['OS'],
    default: true,
    matches: {}
}

const defaultTwitterTemplate = {
    channel: 'Reddit',
    name: 'Default Reddit Template',
    used: true,
    templateString: 'Moin Leude. Es gibts 1 Threat von type ${threatType} und level ${threatLevel}. Er befällt ${OS} Betriebssysteme',
    usesAttributes: ['OS'],
    default: true,
    matches: {}
}


export function createDefaultTemplates(cert_id){
    const defaultTemplates = [defaultEmailTemplate, defaultRedditTemplate, defaultTwitterTemplate]
    return defaultTemplates.map( function(obj){
        return {...obj, cert_id}
    })
}


