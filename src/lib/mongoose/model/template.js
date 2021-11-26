import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;

 
const templateSchema = new Schema({
    cert_id: ObjectId,
    channel: String,
    name: String,
    used: Boolean,
    templateString: String,
    usesAttributes: [ObjectId],
    matches: {
        type: String,
        level: String,
    },
})



const Template = mongoose.model('Subscriber', templateSchema); 
export default Template

