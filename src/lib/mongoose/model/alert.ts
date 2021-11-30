import "$lib/mongoose/connection";
import mongoose, { ObjectId as ObjectIdType} from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;

// Alert Attribute
export interface AlertAttribute {
    key: string,
    value: any,
}
export const alertAttributeSchema = new Schema<AlertAttribute>({
    key: {type: String, required: true},
    value: {type: String, required: true},
})
export const AlertAttribute = mongoose.model('AlertAttribute', alertAttributeSchema);


// Pending Alert
export interface PendingAlertDocument {
    cert_id: ObjectIdType,
    dateCreated: Date,
    createdBy: ObjectIdType,
    threatLevel: String,
    threatType: String,
    title: String,
    intern: Boolean,
    selectedGroups: [ObjectIdType],
    selectedChannels: [String],
    attributes: [AlertAttribute],
    _id: ObjectIdType,
}

export const pendingAlertSchema = new Schema({
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
export const PendingAlert = mongoose.model('PendingAlert', pendingAlertSchema);


// Alert Link
export const alertLinkSchema = new Schema({
    uri: String,
    channel: ObjectId,
})
export const AlertLink = mongoose.model('AlertLink', alertLinkSchema);


// Persisted Alert
export const persistedAlertSchema = new Schema({
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
export const PersistedAlert = mongoose.model('PersistedAlert', persistedAlertSchema);