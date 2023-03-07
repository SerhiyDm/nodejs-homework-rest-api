const { ErrorService } = require("../utils");

const validating = (schema, text) => {
  const foo = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(ErrorService(400, (text = error.message)));
    }
    next();
  };
  return foo;
};

module.exports = validating;
