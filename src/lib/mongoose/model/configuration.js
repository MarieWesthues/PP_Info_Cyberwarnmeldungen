import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;


// Threat Type
export const threatTypeSchema = new Schema({
    name: String,
    description: String,
})
export const ThreatType = mongoose.model('ThreatType', threatTypeSchema); 


// Threat Level
export const threatLevelSchema = new Schema({
    name: String,
    color: String,
})
export const ThreatLevel = mongoose.model('ThreatLevel', threatLevelSchema); 


// Message Attribute
export const messageAttributeSchema = new Schema({
    key: String,
    type: {type: String}, //Attributes with name 'type' have to be written like this because type is a mongoose keyword.
    selectOptions: Mixed,
    usedBy: [ObjectId]
})
export const MessageAttribute = mongoose.model('MessageAttribute', messageAttributeSchema); 


// Configuration
export const configurationSchema = new Schema({
    name: String,
    replyEmail: String,
    logo: Buffer, //Buffer is used for Binary data like blob
    colors: {
        primary: String,
        secondary: String,
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
