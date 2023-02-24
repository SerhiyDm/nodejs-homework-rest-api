const { ErrorService } = require("../utils");

const validating = (shema, text) => {
  const foo = (req, res, next) => {
    const { error } = shema.validate(req.body);
    if (error) {
      next(ErrorService(400, text));
    }
    next();
  };
  return foo;
};

module.exports = validating;
