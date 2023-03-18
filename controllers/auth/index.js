const { ctrlWrapper } = require("../../utils");
const signUp = require("./userSignUp");
const signIn = require("./userSignIn");
const getCurrent = require("./getCurrent");
const logOut = require("./logOut");
const updateSubdiscriptionStatus = require("./updateSubdiscriptionStatus");
const setAvatar = require("./setAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

const userControllers = {
  setAvatar: ctrlWrapper(setAvatar),
  signUp: ctrlWrapper(signUp),
  signIn: ctrlWrapper(signIn),
  getCurrent: ctrlWrapper(getCurrent),
  logOut: ctrlWrapper(logOut),
  updateSubdiscriptionStatus: ctrlWrapper(updateSubdiscriptionStatus),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
module.exports = userControllers;
