import * as Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string().pattern(/w{4,}/).required().messages({
        "string.pattern.base":"Only chars allowed & and this must be at least 4 chars"
    }),
    password: Joi.string().min(3).max(6).required().messages({
        "string.min":"Password must be at least 3 chars",
        "string.max":"Password must be at most 6 chars"
    }),
    age: Joi.number().min(1).max(117).required().messages({
        "string.min":"min age is 1",
        "string.max":"max age is 117"
    }),
});
