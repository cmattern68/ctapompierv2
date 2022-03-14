const stationController = require("./stationsController");

exports.get = (req, res) =>
{
	return res.render('pages/index', {
		countyOperator: 68
	});
}