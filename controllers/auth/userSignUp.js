const bcrypt = require("bcrypt");

const { User } = require("../../models");
const { ErrorService } = require("../../utils");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw ErrorService(409, "Email already in use");
  const hash = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hash });
  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = signUp;
