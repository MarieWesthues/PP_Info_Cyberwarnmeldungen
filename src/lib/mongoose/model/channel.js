import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;


export const channelSchema = {
    name: {type: String, required: true},
    colors: {
        primary: String,
        onPrimary: String
    },
    logo: String, //link to logo 
    messageFormat: {type: String, required: true},
    authenticated: {type: Boolean, required: true}
}

// export const Channel = mongoose.model('Channel', channelSchema);


// const discord = {
//     name: 'Discord',
//     colors: {
//         primary: '#5865F2',
//         onPrimary: 'white'
//     },
//     logo: 'https://discord.com/assets/145dc557845548a36a82337912ca3ac5.svg',
//     messageFormat: 'json',
//     authenticated: false,
// }
const email = {
    name: 'Email',
    colors: {
        primary: 'red',
        onPrimary: 'white',
    },
    logo: "http://localhost:3000/channel-icons/email.png",
    messageFormat: 'html',
    authenticated: true,
}

const reddit = {
    name: 'Reddit',
    colors: {
        primary: '#FF5700',
        onPrimary: 'white',
    },
    logo: "http://localhost:3000/channel-icons/reddit.png",
    messageFormat: 'md',
    authenticated: true,
}

const twitter = {
    name: 'Twitter',
    colors: {
        primary: '#1DA1F2',
        onPrimary: 'white',
    },
    logo: "http://localhost:3000/channel-icons/twitter.png",
    messageFormat: 'txt',
    authenticated: true,
}

export const defaultChannels = [email, reddit, twitter];