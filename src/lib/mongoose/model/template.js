import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;


const templateSchema = new Schema({
    cert_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cert',
        required: true
    },
    channel: {type: String, required: true},
    name: {type: String, required: true},
    used: {type: Boolean, required: true},
    templateString: {type: String, required: true},
    usesAttributes: [{type: String, required: true}],
    matches: {
        type: {type: String, default: ""},
        level: {type: String, default: ""},
    }
}, { minimize: false }) //set minimize to false to preserve empty matches object


// Diese Methode sucht das passende Template anhand der matches eines Alerts
// Die Priorität ist 1) typ+level, 2) nur typ, 3) nur level, 4) none
templateSchema.statics.chooseTemplate = async function(cert_id, channel, matches){

    let matchesBoth = this.findOne({cert_id, channel, used: true, 'matches.type': matches.type, 'matches.level': matches.level})
    let matchesType = this.findOne({cert_id, channel, used: true, 'matches.type': matches.type})
    let matchesLevel = this.findOne({cert_id, channel, used: true, 'matches.level': matches.level})
    let matchesDefault = this.findOne({cert_id, channel, used: true})
    
    // Order of the queries determines specificity
    const queries = [matchesBoth, matchesType, matchesLevel, matchesDefault]

    for (let query of queries){
        let res = await query.exec();
        if (res){
            return res
        }
    }
}



// OS , Remote, Moped Grad
export const Template = mongoose.model('Template', templateSchema); 

const defaultEmailTemplate = {
    channel: 'Email',
    name: 'Default Email Template',
    used: true,
    templateString: 'Moin Leude. Es gibts 1 Threat von type ${threatType} und level ${threatLevel}. Er befällt ${OS} Betriebssysteme',
    usesAttributes: ['OS'],
    matches: {}
}

const defaultRedditTemplate = {
    channel: 'Reddit',
    name: 'Default Reddit Template',
    used: true,
    templateString: 'Moin Leude. Es gibts 1 Threat von type ${threatType} und level ${threatLevel}. Er befällt ${OS} Betriebssysteme',
    usesAttributes: ['OS'],
    matches: {}
}

const defaultTwitterTemplate = {
    channel: 'Twitter',
    name: 'Default Twitter Template',
    used: true,
    templateString: 'Moin Leude. Es gibts 1 Threat von type ${threatType} und level ${threatLevel}. Er befällt ${OS} Betriebssysteme',
    usesAttributes: ['OS'],
    matches: {}
}


export function createDefaultTemplates(cert_id){
    const defaultTemplates = [defaultEmailTemplate, defaultRedditTemplate, defaultTwitterTemplate]
    return defaultTemplates.map( function(obj){
        return {...obj, cert_id}
    })
}


