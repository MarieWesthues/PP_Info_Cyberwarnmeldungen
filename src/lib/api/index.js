import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const uri = `mongodb+srv://${process.env['USER']}:${process.env['PASSWORD']}@cluster0.d0wqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri, (err) => {
    if (err) {
        throw err
    }else{
        console.log("🎉 connected to DB");
    }
})


const threatTypeSchema = new Schema({
    name: String,
    description: String,
})

const threatLevelSchema = new Schema({
    name: String,
    color: String,
})

const messageAttributeSchema = new Schema({
    key: String,
    type: String,
    value: Schema.Types.Mixed,
})

const configurationSchema = new Schema({
    name: String,
    replyEmail: String,
    logo: Buffer, //Buffer is used for Binary data like blob
    colors: {
        primary: String,
        secondary: String,
    },
    threatTypes: [threatTypeSchema],
    threatLevels: [threatLevelSchema],
    messageAttributes: [messageAttributeSchema], 

})




// Create DB Schema
const kittySchema = new mongoose.Schema({
    name: String
});

export const Kitten = mongoose.model('Kitten', kittySchema); 

