import dotenv from 'dotenv';
dotenv.config();

import Snoowrap from 'snoowrap';
// require('dotenv').config()


// console.log(process.env['REDDIT_USER_AGENT']);

const r = new Snoowrap({
    userAgent: process.env['REDDIT_USER_AGENT'],
    clientId: process.env['REDDIT_CLIENT_ID'],
    clientSecret: process.env['REDDIT_CLIENT_SECRET'],
    username: process.env['REDDIT_USER_NAME'],
    password: process.env['REDDIT_PASSWORD'],
  });

const subredditName = 'praxisprojekt'

export function postTextMessage(title: string, text: string){
    r.getSubreddit(subredditName)
        .submitSelfpost({title,text, subredditName})
}