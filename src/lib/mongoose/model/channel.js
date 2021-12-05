import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;


export const channelSchema = new Schema({
    name: {type: String, required: true},
    colors: {
        primary: String,
        onPrimary: String
    },
    logo: String, //link to logo 
    messageFormat: {type: String, required: true},
    authenticated: {type: Boolean, required: true}
})

export const Channel = mongoose.model('Channel', channelSchema);


const discord = new Channel({
    name: 'Discord',
    colors: {
        primary: '#5865F2',
        onPrimary: 'white'
    },
    logo: 'https://discord.com/assets/145dc557845548a36a82337912ca3ac5.svg',
    messageFormat: 'json',
    authenticated: false,
})

const email = new Channel({
    name: 'Email',
    colors: {
        primary: 'red',
        onPrimary: 'white',
    },
    // no logo yet
    messageFormat: 'html',
    authenticated: true,
})

const reddit = new Channel({
    name: 'Reddit',
    colors: {
        primary: '#FF5700',
        onPrimary: 'white',
    },
    // no logo yet
    messageFormat: 'md',
    authenticated: true,
})

const twitter = new Channel({
    name: 'Twitter',
    colors: {
        primary: '#1DA1F2',
        onPrimary: 'white',
    },
    messageFormat: 'txt',
    authenticated: true,
})

export const defaultChannels = [email, reddit, twitter];