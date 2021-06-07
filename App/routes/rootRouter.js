let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');
const rootController = require('../controllers/rootController')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(express.json());

router.get('/', rootController.get);

module.exports = router;