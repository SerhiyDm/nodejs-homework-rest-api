const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { ErrorService } = require("../../utils");

const { SECRET_KEY } = process.env;

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw ErrorService(401, "Email or password is wrong");
  if (!user.verify) throw ErrorService(401, "Email is not verified");
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) throw ErrorService(401, "Email or password is wrong");
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    token,
  });
};

module.exports = signIn;
