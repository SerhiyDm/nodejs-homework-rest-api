const { User } = require("../../models");
const { ErrorService } = require("../../utils");

const updateSubdiscriptionStatus = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const result = await User.findByIdAndUpdate(_id, req.body, {
    new: subscription,
  });
  if (!result) throw ErrorService(404, "Not found");
  res.json(result);
};

module.exports = updateSubdiscriptionStatus;
