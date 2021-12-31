import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;

export const subscriberSchema = new Schema({
    cert_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cert',
        required: true
    }, 
    name: {type: String, required: true},
    email: {type:String, required:true},
    intern: {type: Boolean, required: true},
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }],
})

// middleware for many to many relation to groups
subscriberSchema.pre('save', function(next){

    // remove subscriber from groups
    this.model('Group').updateMany({_id: {$nin: this.groups}}, {$pull: {subscribers: this._id}}).exec();

    // add subscriber to groups
    this.model('Group').updateMany({_id: {$in: this.groups}}, {$addToSet: {subscribers: this._id}}).exec();

    next();
})

export const Subscriber = mongoose.model('Subscriber', subscriberSchema); 

export const groupSchema = new Schema({
    cert_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cert',
        required: true
    }, 
    name: {type: String, required: true},
    description: {type: String, required: true},
    color:  {type: String, default: 'green'},
    subscribers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscriber'
    }],
})

groupSchema.pre('save', function(next){
    // remove group from subscribers
    this.model('Subscriber').updateMany({_id: {$nin: this.subscribers}}, {$pull: {groups: this._id}}).exec();
    
    // add group to subscribers
    this.model('Subscriber').updateMany({_id: {$in: this.subscribers}}, {$addToSet: {groups: this._id}}).exec();

    next();

})

export const Group = mongoose.model('Group', groupSchema); 