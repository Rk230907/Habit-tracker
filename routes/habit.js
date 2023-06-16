const express = require('express');

const router = express.Router();
const habitController = require('../controllers/habit_controller');

console.log('ROUTER LOADED');
router.post('/habit', habitController.habit);

module.exports = router;

