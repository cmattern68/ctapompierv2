const validationResult = require('express-validator').validationResult;

exports.get = async (req, res) =>
{
	/*const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(422).json({ error: errors.array()[0].msg });*/
	return res.render('pages/index', {
		countyOperator: 68
	});
}