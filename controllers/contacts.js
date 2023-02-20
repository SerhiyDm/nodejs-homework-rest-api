const { ErrorService, ctrlWrapper } = require("../utils");
const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../models/contacts");

const getContactsList = async (_, res) => {
  res.json(await listContacts());
};

const getContact = async (req, res) => {
  const { id } = req.params;
  const data = await getContactById(id);
  if (!data) {
    throw ErrorService(404, "Not found");
  }
  res.json(data);
};

const addNewContact = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

const changeContact = async (req, res) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);
  if (!result) {
    throw ErrorService(404, "Not found");
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await removeContact(id);
  if (!result) {
    throw ErrorService(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

module.exports = {
  getContactsList: ctrlWrapper(getContactsList),
  getContact: ctrlWrapper(getContact),
  addNewContact: ctrlWrapper(addNewContact),
  changeContact: ctrlWrapper(changeContact),
  deleteContact: ctrlWrapper(deleteContact),
};
