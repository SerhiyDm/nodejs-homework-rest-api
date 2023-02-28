const Joi = require("joi");
const { dataRegexpEmail, dataRegexpPhone } = require("../../constants");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(dataRegexpEmail).required(),
  phone: Joi.string().pattern(dataRegexpPhone).required(),
  favorite: Joi.boolean(),
});

const changeFavoriteStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  changeFavoriteStatusSchema,
};

module.exports = schemas;
