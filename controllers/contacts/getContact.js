const { ErrorService } = require("../../utils");
const { Contact } = require("../../models");

const getContact = async (req, res) => {
  const { id } = req.params;
  const data = await Contact.findById(id, "-__v").populate(
    "owner",
    "name email"
  );
  if (!data) {
    throw ErrorService(404, "Not found");
  }
  res.json(data);
};

module.exports = getContact;
