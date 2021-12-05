import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;


// Threat Type
// export const threatTypeSchema = new Schema({
//     name: String,
//     description: String,
// })
// export const ThreatType = mongoose.model('ThreatType', threatTypeSchema); 

export const threatTypeSchema = {
    name: {type: String, required: true},
    description: {type: String}
}

export function ThreatType(name: string, description: string){
    this.name = name;
    this.description = description;
}


// Threat Level
export const threatLevelSchema = {
    name: {type: String, required: true},
    color: {type: String, required: true}
}
// export const ThreatLevel = mongoose.model('ThreatLevel', threatLevelSchema);
export function ThreatLevel(name: string, color: string){
    this.name = name;
    this.color = color;
}


// Message Attribute
export const messageAttributeSchema = new Schema({
    key: {type: String, required: true},
    type: {type: String, required: true}, //Attributes with name 'type' have to be written like this because type is a mongoose keyword.
    selectOptions: {type: Mixed},
    usedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Template'
    }]
})
export const MessageAttribute = mongoose.model('MessageAttribute', messageAttributeSchema); 


// Configuration
export const configurationSchema = new Schema({
    name: {type: String, required: true},
    replyEmail: {type: String, required: true},
    logo: Buffer, //Buffer is used for Binary data like blob
    colors: {
        primary: {type: String, default: '#79A3B1'},
        secondary: {type: String, default: '#FCF8EC'},
    },
    threatTypes: [threatTypeSchema],
    threatLevels: [threatLevelSchema],
    messageAttributes: [messageAttributeSchema], 
})
export const Configuration = mongoose.model('Configuration', configurationSchema);


// Default Configuration
export const defaultConfiguration = new Configuration({
    name: 'Default Cert',
    replyEmail: 'defaultreplyemail@gmail.com',
    // no logo 
    colors: {
        primary: 'blue',
        secondary: 'orange',
    },
    threatTypes : [
        {name: 'Malware'}, 
        {name: 'Virus'}, 
        {name: 'Exploit'}
    ],
    threatLevels : [
        {name: '1', color: 'yellow'}, 
        {name: '2', color: 'orange'}, 
        {name: '3', color: 'red'}, 
        {name: '4', color: 'darkred'}
    ],
    messageAttributes: [
        {
            key: 'Remote',
            type: 'BOOLEAN'
        },
        {
            key: 'OS',
            type: 'MULTISELECT',
            selectOptions: ['Mac-OS', 'Windows', 'Linux', 'Temple-OS']
        },
        {
            key: 'Moped Grad',
            type: 'SELECT',
            selectOptions: ['kleines Moped','dickes Moped', 'meeeega fettes Moped']
        }

    ]

})
