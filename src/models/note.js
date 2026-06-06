import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, 
    },
    content: {
      type: String,
      required: false,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      enum: TAGS,
      required: false,
      default: 'Todo',
    },
  },
  {
    timestamps: true,
  },
);

noteSchema.index({ tag: 1 });

export const Note = model('Note', noteSchema);
