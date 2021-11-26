import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;

export const userPermissionsSchema = new Schema({
    sendAlert: Boolean,
    createAlert: Boolean,
    editSubscribers: Boolean,
    editGroups: Boolean,
    editConfig: Boolean,
})
export const userPermissions = mongoose.model('UserPermissions', userPermissionsSchema);

export const userSchema = new Schema({
    cert_id: ObjectId,
    email: String,
    name: String,
    password: String,
    permissions: userPermissionsSchema,
})
export const User = mongoose.model('User', userSchema);