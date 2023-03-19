const Joi = require("joi");
const { dataRegexpEmail, subscriptionValues } = require("../../constants");

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(dataRegexpEmail).required(),
  password: Joi.string().min(7).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(dataRegexpEmail).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(dataRegexpEmail).required(),
  password: Joi.string().min(7).required(),
});
const changeSubscriptionStatusSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionValues)
    .required(),
});

const schemas = {
  emailSchema,
  registerSchema,
  loginSchema,
  changeSubscriptionStatusSchema,
};

module.exports = schemas;
