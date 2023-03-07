const { Contact } = require("../../models");

const getContactsList = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const filterParams =
    (favorite !== undefined && favorite === "true") ||
    (favorite !== undefined && favorite === "false")
      ? { owner, favorite }
      : { owner };
  res.json(
    await Contact.find(filterParams, "-createdAt -updatedAt -__v", {
      skip,
      limit,
    }).populate("owner", "name email")
  );
};

module.exports = getContactsList;
