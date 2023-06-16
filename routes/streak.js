const express = require('express');

const router = express.Router();

const streakController = require('../controllers/streak_controller');


router.get('/streak/:id', streakController.streak);
router.post('/dates', streakController.updateStreak )


module.exports = router;