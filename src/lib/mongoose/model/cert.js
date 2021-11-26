import "$lib/mongoose/connection";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const {Mixed, ObjectId} = Schema.Types;

import { configurationSchema } from './configuration';
import { channelSchema } from './channel';

export const certSchema = new Schema({
    configuration: configurationSchema,
    channels: [channelSchema],
})

export const Cert = mongoose.model('Cert', certSchema);