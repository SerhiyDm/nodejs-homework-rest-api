const { ctrlWrapper } = require("../../utils");
const signUp = require("./userSignUp");
const signIn = require("./userSignIn");
const getCurrent = require("./getCurrent");
const logOut = require("./logOut");
const updateSubdiscriptionStatus = require("./updateSubdiscriptionStatus");

const userControllers = {
  signUp: ctrlWrapper(signUp),
  signIn: ctrlWrapper(signIn),
  getCurrent: ctrlWrapper(getCurrent),
  logOut: ctrlWrapper(logOut),
  updateSubdiscriptionStatus: ctrlWrapper(updateSubdiscriptionStatus),
};
module.exports = userControllers;
