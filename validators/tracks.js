const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator");

const validacion_createItems = [
  check("name").exists().notEmpty().isLength({ min: 5, max: 90 }),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResult(req, res, next);
  }
];

module.exports = {
  validacion_createItems,
};
