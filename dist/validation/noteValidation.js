import Joi from 'joi';
import { Schema, model } from 'mongoose';
const datePattern = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/;
export const noteJoiSchema = Joi.object({
    name: Joi.string().trim().required(),
    content: Joi.string().trim().min(8).required(),
    dates: Joi.array().items(Joi.string().pattern(datePattern)).optional(),
    category: Joi.string()
        .trim()
        .valid('Task', 'Random Thought', 'Idea')
        .required(),
    created: Joi.string(),
    isArchived: Joi.boolean().default(false),
});
const noteSchema = new Schema({
    name: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true, minlength: 8 },
    dates: { type: [String] },
    category: {
        type: String,
        trim: true,
        enum: ['Task', 'Random Thought', 'Idea'],
        required: true,
    },
    created: { type: String },
    isArchived: { type: Boolean, default: false },
}, { versionKey: false, timestamps: true });
export const NoteModel = model('Note', noteSchema);
