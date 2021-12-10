import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;

export const userPermissionsSchema = {
    sendAlert: {type: Boolean, required: true},
    createAlert: {type: Boolean, required: true},
    editSubscribers: {type: Boolean, required: true},
    editGroups: {type: Boolean, required: true},
    editConfig: {type: Boolean, required: true},
}
// export const userPermissions = mongoose.model('UserPermissions', userPermissionsSchema);

export const userSchema = new Schema({
    cert_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cert',
        required: true
    }, 
    email: {type: String, required: true},
    name:  {type: String, required: true},
    password:  {type: String, required: true},
    permissions: userPermissionsSchema,
})
export const User = mongoose.model('User', userSchema);