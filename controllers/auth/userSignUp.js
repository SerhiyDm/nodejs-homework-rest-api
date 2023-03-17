const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const { User } = require("../../models");
const { ErrorService } = require("../../utils");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw ErrorService(409, "Email already in use");
  const hash = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const newUser = await User.create({ ...req.body, password: hash, avatarURL });
  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = signUp;
