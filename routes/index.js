const express = require('express');

const router = express.Router();

// Controller to render the home logic
const homeController = require('../controllers/home_controller');

console.log('router loaded');


// Get the homecontroller logic from controller
router.get('/', homeController.home);

// REDIRECT TO ADD THE HABIT ROUTE
router.use('/add', require('./habit'));

// redirect to  /habit route
router.use('/habit', require('./streak'));

// redirect to update route
router.use('/habit/streak/update', require('./streak'));


module.exports = router;