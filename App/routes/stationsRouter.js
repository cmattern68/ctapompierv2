let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
const stationsController = require('../controllers/stationsController')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(express.json());

router.get('/', stationsController.get);

module.exports = router;