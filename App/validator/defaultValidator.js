const { query } = require('express-validator');


exports.get = [
	query('q', 'La recherche est invalide.').optional({nullable: true, checkFalsy: true}).isString().trim().escape()
];