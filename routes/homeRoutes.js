const { Router } = require('express');
const router = Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home_get);

module.exports = router;
