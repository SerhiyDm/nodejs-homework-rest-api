const { Contact } = require("../../models");

const getContactsList = async (_, res) => {
    res.json(await Contact.find({}, "-createAt -updateAt"));
  };

  module.exports = getContactsList;