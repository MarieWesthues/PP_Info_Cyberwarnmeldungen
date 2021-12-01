import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;

export const subscriberSchema = new Schema({
    cert_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cert'
    }, 
    name: String,
    email: {type:String, required:true},
    intern: Boolean,
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }],
})
export const Subscriber = mongoose.model('Subscriber', subscriberSchema); 

export const groupSchema = new Schema({
    cert_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cert'
    }, 
    name: String,
    description: String,
    color: String,
    subscribers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscriber'
    }],
})
export const Group = mongoose.model('Group', groupSchema); 