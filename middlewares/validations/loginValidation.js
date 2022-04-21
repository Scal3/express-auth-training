const { celebrate, Joi, Segments } = require('celebrate')
module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    
    userName: Joi.string()
      .required()
      .min(4)
      .max(14)
      .trim(),

    password: Joi.string()
      .required()
      .min(6)
      .max(16)
      .trim(),
  })
})