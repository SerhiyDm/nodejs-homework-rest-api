const { Schema, model } = require("mongoose");
const { mongooseErrorHandler } = require("../../utils");
const { dataRegexpEmail, subscriptionValues } = require("../../constants");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: dataRegexpEmail,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      minlength: 7,
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      enum: subscriptionValues,
      default: "starter",
    },
    avatarURL: {
      type: String,
      required: [true, "Set avatar url for user"],
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", mongooseErrorHandler);

const User = model("user", userSchema);

module.exports = User;
