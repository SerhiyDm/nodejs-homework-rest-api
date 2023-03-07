const express = require("express");
const { contactsControllers } = require("../../controllers");
const { validating, isValidId, authenticate } = require("../../middlewares");

const { contactsSchemas } = require("../../models");
const router = express.Router();

router.get("/", authenticate, contactsControllers.getContactsList);

router.get("/:id", authenticate, isValidId, contactsControllers.getContact);

router.post(
  "/",
  authenticate,
  validating(contactsSchemas.addSchema, "missing required name field"),
  contactsControllers.addNewContact
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validating(contactsSchemas.addSchema, "missing fields"),
  contactsControllers.changeContact
);
router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validating(contactsSchemas.changeFavoriteStatusSchema, "missing fields"),
  contactsControllers.updateStatusContact
);

router.delete(
  "/:id",
  authenticate,
  isValidId,
  contactsControllers.deleteContact
);

module.exports = router;
