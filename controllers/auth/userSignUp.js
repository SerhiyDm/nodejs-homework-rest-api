const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models");
const { ErrorService, sendEmail } = require("../../utils");
const { BASE_URL } = process.env;

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw ErrorService(409, "Email already in use");
  const hash = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hash,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blanc" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
  };
  sendEmail(verifyEmail);
  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = signUp;
