const mongoose = require('mongoose');

const streakSchema = new mongoose.Schema({
    habit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Habit',
      required: true
    },
    datesCompleted: [{
      date: {
        type: String,
        required: true
      },
      completed: {
        type: Boolean,
        default: false
      }
    }]
  }, {
    timestamps: true
  });

const Streak= mongoose.model('Streak', streakSchema);

module.exports = Streak;