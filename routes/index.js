const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);

router.use('/add', require('./habit'));
router.use('/habit', require('./streak'));

router.use('/habit/streak/update', require('./streak'));


module.exports = router;