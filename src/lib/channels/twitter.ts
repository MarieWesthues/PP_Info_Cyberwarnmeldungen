import dotenv from 'dotenv';
dotenv.config()


import Twitter from 'twitter'

// require('dotenv').config()

var client = new Twitter({
    consumer_key: process.env['TWITTER_API_KEY'],
    consumer_secret: process.env['TWITTER_API_KEY_SECRET'],
    access_token_key: process.env['TWITTER_ACCESS_TOKEN'],
    access_token_secret: process.env['TWITTER_ACCESS_TOKEN_SECRET']
  });


// export function postTextMessageTwitter(title, text){
//     // tweets do not have a title
//     client.post('statuses/update', {status: text},  function(error, tweet, response) {
//         if(error) throw error;

//       });
// }

export function sendTwitterAlert(text, alertObject){

  return new Promise((resolve, reject)=>{
    client.post('statuses/update', {status: text},  function(error, tweet, response) {
      if(error){
        reject(error)
      }else{
        resolve({
          channel: 'Twitter',
          type: 'link',
          resource: `https://twitter.com/${tweet.user.name}/status/${tweet.id_str}`
        })
      }
      // console.log(tweet);      
    });
  })
}