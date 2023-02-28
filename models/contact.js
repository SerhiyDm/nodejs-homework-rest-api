const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { mongooseErrorHandler } = require("../utils");

const dataRegexpEmail =
  /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;
const dataRegexpPhone =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
      match: dataRegexpEmail,
    },
    phone: {
      type: String,
      required: [true, "Set phone number for contact"],
      match: dataRegexpPhone,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

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
contactSchema.post("save", mongooseErrorHandler);
const Contact = model("contact", contactSchema);
module.exports = {
  Contact,
  schemas,
};
