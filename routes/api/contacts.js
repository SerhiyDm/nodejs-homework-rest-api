const express = require("express");
const {
  getContact,
  getContactsList,
  addNewContact,
  changeContact,
  deleteContact,
  updateStatusContact,
} = require("../../controllers/contacts");
const { validating, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", getContactsList);

router.get("/:id", isValidId, getContact);

router.post(
  "/",
  validating(schemas.addSchema, "missing required name field"),
  addNewContact
);

router.put(
  "/:id",
  isValidId,
  validating(schemas.addSchema, "missing fields"),
  changeContact
);
router.patch(
  "/:id/favorite",
  isValidId,
  validating(schemas.changeFavoriteStatusSchema, "missing fields"),
  updateStatusContact
);

router.delete("/:id", isValidId, deleteContact);

module.exports = router;
