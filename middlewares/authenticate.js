const { ErrorService } = require("../utils");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  console.log(req.rawHeaders.find((el) => el.includes("Bearer")));
  if (!req.rawHeaders.find((el) => el.includes("Bearer"))) {
    next(ErrorService(401));
    return;
  }
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") next(ErrorService(401));
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) next(ErrorService(401));
    req.user = user;
    next();
  } catch {
    next(ErrorService(401));
  }
};

module.exports = authenticate;
