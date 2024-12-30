const { body } = require("express-validator");

const validateAuthor = [
    body('name')
    .trim()
    .notEmpty()
    .withMessage('Author name is required')
    .isLength({max:50})
    .withMessage('Author name must be less than 50 characters'),
];

module.exports = validateAuthor;
  