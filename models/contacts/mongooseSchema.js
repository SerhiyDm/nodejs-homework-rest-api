const { Schema, model } = require("mongoose");
const { mongooseErrorHandler } = require("../../utils");
const { dataRegexpEmail, dataRegexpPhone } = require("../../constants");

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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", mongooseErrorHandler);
const Contact = model("contact", contactSchema);
module.exports = Contact;
