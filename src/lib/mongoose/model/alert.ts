import "$lib/mongoose/connection";
import mongoose, { ObjectId as ObjectIdType} from 'mongoose';

// User muss hier importiert werden, da es vor pendingAlert erstellt werden muss
import "./user"
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;

// Alert Attribute
// export interface AlertAttribute {
//     key: string,
//     value: any,
// }
export const alertAttributeSchema = {
    key: {type: String, required: true},
    value: {type: Mixed, required: true},
}
// export const AlertAttribute = mongoose.model('AlertAttribute', alertAttributeSchema);


// Pending Alert
// export interface PendingAlertDocument {
//     cert_id: ObjectIdType,
//     dateCreated: Date,
//     createdBy: ObjectIdType,
//     threatLevel: String,
//     threatType: String,
//     title: String,
//     intern: Boolean,
//     selectedGroups: [ObjectIdType],
//     selectedChannels: [String],
//     attributes: [AlertAttribute],
//     _id: ObjectIdType,
// }

export const pendingAlertSchema = new Schema({
    cert_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cert',
        required: true
    },
    dateCreated:  {type: Date, required: true},
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    threatLevel: {type: String, required: true},
    threatType: {type: String, required: true},
    incident: {type: String, required: true},
    assessment: {type: String, required: true},
    actions: {type: String, required: true},
    title: {type: String, required: true},
    intern: {type: Boolean, required: true},
    selectedGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }],
    // selectedChannels: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Channel'
    // }],
    selectedChannels: [String],
    attributes: Mixed 
})
export const PendingAlert = mongoose.model('PendingAlert', pendingAlertSchema);


// Alert Link
export const alertLinkSchema = {
    uri: {type: String, required: true},
    channel: {type: String, required: true},
}
// export const AlertLink = mongoose.model('AlertLink', alertLinkSchema);


// Persisted Alert
export const persistedAlertSchema = new Schema({
    cert_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cert',
        required: true
    }, 
    dateCreated: {type: Date, required: true},
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    threatLevel: {type: String, required: true},
    threatType: {type: String, required: true},
    incident: {type: String, required: true},
    assessment: {type: String, required: true},
    actions: {type: String, required: true},
    title: {type: String, required: true},
    intern: {type: Boolean, required: true},
    selectedGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }],
    attributes: Mixed,
    dateSend: {type: Date, required: true},
    authorizedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    links: [alertLinkSchema]
})
export const PersistedAlert = mongoose.model('PersistedAlert', persistedAlertSchema);