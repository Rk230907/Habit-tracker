const express = require('express');

const router = express.Router();

const streakController = require('../controllers/streak_controller');

// Get the page and also post as per the streak and update streal controller logic
router.get('/streak/:id', streakController.streak);
router.post('/dates', streakController.updateStreak )


module.exports = router;