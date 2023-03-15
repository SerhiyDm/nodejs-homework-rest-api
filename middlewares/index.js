const validating = require("./validateRequestBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");
module.exports = {
  validating,
  isValidId,
  authenticate,
  upload,
};
