import Joi from 'joi';
const datePattern = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/;
export const noteSchema = Joi.object({
    name: Joi.string().trim().required(),
    content: Joi.string().trim().min(8).required(),
    dates: Joi.array().items(Joi.string().pattern(datePattern)).optional(),
    category: Joi.string()
        .trim()
        .valid('Task', 'Random Thought', 'Idea')
        .insensitive()
        .required(),
    isArchived: Joi.boolean().default(false),
});
