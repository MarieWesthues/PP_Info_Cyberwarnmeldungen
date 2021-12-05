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

//Test
//export const certSchema = new Schema({
  //  configuration: {
  //      type: mongoose.Schema.Types.ObjectId,
    //    ref: 'Configuration',
   //     required: true
  //  },
   // channels: [{
  //      type: mongoose.Schema.Types.ObjectId,
 //       ref: 'Channel',
//    }],
//})

export const Cert = mongoose.model('Cert', certSchema);