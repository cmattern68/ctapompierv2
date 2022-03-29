const validationResult = require('express-validator').validationResult;
const models = require('../database/models');

exports.get = (req, res) =>
{
    return res.status(200).json({ msg: "ok" });
}