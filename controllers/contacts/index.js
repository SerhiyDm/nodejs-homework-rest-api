const addNewContact = require("./addContact");
const changeContact = require("./changeContact");
const deleteContact = require("./deleteContact");
const getContactsList = require("./getContactsList");
const getContact = require("./getContact");
const updateStatusContact = require("./updateStatusContact");
const { ctrlWrapper } = require("../../utils");

const contactsControllers = {
  getContactsList: ctrlWrapper(getContactsList),
  getContact: ctrlWrapper(getContact),
  addNewContact: ctrlWrapper(addNewContact),
  changeContact: ctrlWrapper(changeContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};

module.exports = contactsControllers;
