import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;
 

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

export function ThreatLevel(name: string, color: string){
    this.name = name;
    this.color = color;
}


// Message Attribute
export const messageAttributeSchema = {
    key: {type: String, required: true},
    type: {type: String, required: true}, //Attributes with name 'type' have to be written like this because type is a mongoose keyword.
    selectOptions: {type: Mixed},
    usedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Template'
    }]
}



// Configuration
export const configurationSchema = {
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
}


// Default Configuration
export const defaultConfiguration = {
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
        {name: 'Exploit'},
        {name: 'Schwachstelle'},
        {name: 'Gefährdung'},
        {name: 'Vorfall'},
        {name: 'IT-Assets'}
    ],
    threatLevels : [
        {name: '1', color: 'grey'}, 
        {name: '2', color: 'yellow'}, 
        {name: '3', color: 'orange'}, 
        {name: '4', color: 'red'}
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

}
