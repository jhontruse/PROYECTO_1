const { validationResult } = require("express-validator");

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next(); //* APUNTA AL CONTROLLER
  } catch (err) {
    res.status(403);
    res.send({ error: err.array() });
  }
};

module.exports = validateResult;
