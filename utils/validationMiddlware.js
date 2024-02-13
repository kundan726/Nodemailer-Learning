const schema = require("../validations/basicValidations.js");
const logger = require("logger");

const validateEmail = async (req, res, next) => {
  try {
    console.log("req.body)",req.body)
    const { error } = schema.validate(req.body);
    if (error) {
      console.error(`error ${error.details[0].message}`);
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  } catch (error) {}
};
module.exports = validateEmail;
