import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const uri = `mongodb+srv://${process.env['ATLAS_USER']}:${process.env['ATLAS_PASSWORD']}@cluster0.d0wqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri, (err) => {
    if (err) {
        throw err
    }else{
        console.log("🎉 connected to DB");
    }
})

// Create DB Schema
const kittySchema = new mongoose.Schema({
    name: String
  });

export const Kitten = mongoose.model('Kitten', kittySchema); 

