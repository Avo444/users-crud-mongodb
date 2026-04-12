const Joi = require("joi");

const addUserSchema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(12).required().messages({
        "string.base": "First name must be a string",
        "string.alphanum": "First name must contain only letters and numbers",
        "string.empty": "First name is required",
        "string.min": "First name must be at least 3 characters long",
        "string.max": "First name must be at most 12 characters long",
        "any.required": "First name is required",
    }),

    lastName: Joi.string().alphanum().min(4).max(15).required().messages({
        "string.base": "Last name must be a string",
        "string.alphanum": "Last name must contain only letters and numbers",
        "string.empty": "Last name is required",
        "string.min": "Last name must be at least 4 characters long",
        "string.max": "Last name must be at most 15 characters long",
        "any.required": "Last name is required",
    }),

    age: Joi.number().min(1).max(90).required().messages({
        "number.base": "Age must be a number",
        "number.min": "Age must be at least 1",
        "number.max": "Age must be at most 90",
        "any.required": "Age is required",
    }),

    gender: Joi.string().valid("male", "female").required().messages({
        "string.base": "Gender must be a string",
        "any.only": "Gender must be either 'male' or 'female'",
        "any.required": "Gender is required",
    }),
});

module.exports = addUserSchema