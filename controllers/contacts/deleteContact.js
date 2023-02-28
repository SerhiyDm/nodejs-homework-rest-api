const { Contact } = require("../../models");
const { ErrorService } = require("../../utils");

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw ErrorService(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

module.exports = deleteContact;
