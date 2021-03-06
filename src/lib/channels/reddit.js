import dotenv from 'dotenv';
dotenv.config();

import Snoowrap from 'snoowrap';
// require('dotenv').config()


const r = new Snoowrap({
    userAgent: process.env['REDDIT_USER_AGENT'],
    clientId: process.env['REDDIT_CLIENT_ID'],
    clientSecret: process.env['REDDIT_CLIENT_SECRET'],
    username: process.env['REDDIT_USER_NAME'],
    password: process.env['REDDIT_PASSWORD'],
  });

const subredditName = 'praxisprojekt'


export async function sendRedditAlert(text, alertObject){

  let {title} = alertObject;
  let submission = await r.getSubreddit(subredditName).submitSelfpost({title ,text, subredditName})
  return submission.url.then(url => ({
    channel: 'Reddit',
    type: 'link',
    resource: url
  }))
}