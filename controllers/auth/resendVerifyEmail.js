const { User } = require("../../models");
const { sendEmail } = require("../../services");
const { ErrorService } = require("../../utils");
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw ErrorService(401, "Email not found");
  if (user.verify)
    throw ErrorService(400, "Verification has already been passed");
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blanc" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`,
  };
  sendEmail(verifyEmail);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
