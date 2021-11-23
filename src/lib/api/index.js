import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const DB_NAME = 'myFirstDatabase';
const uri = `mongodb+srv://${process.env['USER']}:${process.env['PASSWORD']}@cluster0.d0wqi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, (err) => {
    if (err) {
        throw err
    }else{
        console.log("🎉 connected to DB");
    }
})

// Configuration Schema
const {Mixed, ObjectId} = Schema.Types;

const threatTypeSchema = new Schema({
    name: String,
    description: String,
})

const threatLevelSchema = new Schema({
    name: String,
    color: String,
})

const messageAttributeSchema = new Schema({
    key: String,
    type: String,
    value: Mixed,
    usedBy: [ObjectId]
})

const configurationSchema = new Schema({
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

// Templates

const templateSchema = new Schema({
    cert_id: ObjectId,
    channel: String,
    name: String,
    used: Boolean,
    templateString: String,
    usesAttributes: [ObjectId],
    matches: {
        type: String,
        level: String,
    },
})

// Subscriber & groups
const subscriberSchema = new Schema({
    cert_id: ObjectId,
    name: String,
    email: String,
    intern: Boolean,
    groups: [ObjectId],
})

const groupSchema = new Schema({
    cert_id: ObjectId,
    name: String,
    description: String,
    color: String,
    subscribers: [ObjectId],
})

// User
const userPermissions = new Schema({
    sendAlert: Boolean,
    createAlert: Boolean,
    editSubscribers: Boolean,
    editGroups: Boolean,
    editConfig: Boolean,
})

const userSchema = new Schema({
    cert_id: ObjectId,
    email: String,
    name: String,
    password: String,
    permissions: userPermissions,
})

// Alert and history
const alertAttributeSchema = new Schema({
    key: String,
    value: Mixed,
})

const pendingAlertSchema = new Schema({
    cert_id: ObjectId,
    dateCreated: Date,
    createdBy: ObjectId,
    threatLevel: String,
    threatType: String,
    title: String,
    intern: Boolean,
    selectedGroups: [ObjectId],
    selectedChannels: [String],
    attributes: [alertAttributeSchema]
})

const alertLinkSchema = new Schema({
    uri: String,
    channel: ObjectId,
})

const persistedAlertSchema = new Schema({
    cert_id: ObjectId,
    dateCreated: Date,
    createdBy: ObjectId,
    threatLevel: String,
    threatType: String,
    title: String,
    intern: Boolean,
    selectedGroups: [ObjectId],
    attributes: [alertAttributeSchema],
    dateSend: Date,
    authorizedBy: ObjectId,
    links: [alertLinkSchema]
})

const channelSchema = new Schema({
    name: String,
    colors: {
        primary: String,
        onPrimary: String,
    },
    logo: String, //link to logo 
    messageFormat: String,
    authenticated: Boolean,
})

// Cert
const certSchema = new Schema({
    configuration: configurationSchema,
    channels: [channelSchema],
})

// Create DB Schema
const kittySchema = new mongoose.Schema({
    name: String
});

export const Kitten = mongoose.model('Kitten', kittySchema); 

