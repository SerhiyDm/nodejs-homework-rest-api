const errorsList = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const ErrorService = (status, message = errorsList[status]) => {
  const err = new Error(message);
  err.status = status;
  return err;
};
module.exports = ErrorService;
