let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
const equipementsController = require('../controllers/equipementsController')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(express.json());

router.get('/', equipementsController.get);

module.exports = router;