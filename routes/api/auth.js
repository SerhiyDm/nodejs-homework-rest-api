const express = require("express");
const { userJoiSchemas } = require("../../models");
const { validating, authenticate } = require("../../middlewares");
const { userControllers } = require("../../controllers");

const router = express.Router();

router.patch(
  "/",
  authenticate,
  validating(userJoiSchemas.changeSubscriptionStatusSchema),
  userControllers.updateSubdiscriptionStatus
);

router.post(
  "/register",
  validating(userJoiSchemas.registerSchema),
  userControllers.signUp
);

router.post(
  "/login",
  validating(userJoiSchemas.loginSchema),
  userControllers.signIn
);

router.get("/current", authenticate, userControllers.getCurrent);

router.post("/logout", authenticate, userControllers.logOut);

module.exports = router;
