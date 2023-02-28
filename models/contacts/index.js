const schemas = require("./joiSchema");
const Contact = require("./mongooseSchema");
const contactsModels = {
  schemas,
  Contact,
};

module.exports = contactsModels;
