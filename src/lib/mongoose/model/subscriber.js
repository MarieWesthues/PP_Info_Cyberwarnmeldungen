import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;

export const subscriberSchema = new Schema({
    cert_id: ObjectId,
    name: String,
    email: String,
    intern: Boolean,
    groups: [ObjectId],
})
export const Subscriber = mongoose.model('Subscriber', subscriberSchema); 

export const groupSchema = new Schema({
    cert_id: ObjectId,
    name: String,
    description: String,
    color: String,
    subscribers: [ObjectId],
})
export const Group = mongoose.model('Group', groupSchema); 