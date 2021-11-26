import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const DB_NAME = 'myFirstDatabase';


const uri = `mongodb+srv://${process.env['ATLAS_USER']}:${process.env['ATLAS_PASSWORD']}@cluster0.d0wqi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;


mongoose.connect(uri, (err) => {
    if (err) {
        throw err
    }else{
        console.log("🎉 connected to DB");
    }
})