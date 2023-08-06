import Joi from 'joi';
export const noteSchema = Joi.object({
    name: Joi.string().required(),
    date: Joi.date().required(),
    category: Joi.string().required(),
    content: Joi.string().required(),
});
