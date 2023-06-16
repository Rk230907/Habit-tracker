const Streak = require('../models/streak');
const Habit = require('../models/habits');
const { habit } = require('./habit_controller');

module.exports.streak = async function(req, res) {
    try {
      const habitId = req.params.id;
      const habit = await Habit.findById(habitId);
      const streaks = await Streak.find({}).populate('habit');
      if (!habit) {
        console.log('Habit not found');
        return res.redirect('/');
      }
      res.render('streak', {
        title: 'Streak Week View',
        habit: habit,
        streaks: streaks,
        selectedView: selectedView
      });
    } catch (err) {
      console.error('Error fetching streak:', err);
      res.redirect('/');
    }
  };
  



module.exports.updateStreak = async function(req, res) {
    try {
      const habitID = req.body.habitID;
      const datesCompleted = [];
  
      for (let i = 0; i < 7; i++) {

        const isDone = req.body[`checkbox_${i}`] === 'on';
        datesCompleted.push({ date: getDate(i), completed: isDone });
      }
  
      const habit = await Habit.findById(habitID);
  
      if (!habit) {
        console.log('Habit not found');
        return res.redirect('/');
      }
  
      const streak = await Streak.findOne({ habit: habitID }).populate('habit');
  
      if (streak) {
        streak.datesCompleted = datesCompleted;
        await streak.save();
        console.log('Streak updated:', streak);
      } else {
        const newStreak = await Streak.create({
          habit: habit,
          datesCompleted: datesCompleted
        });
        console.log('New streak created:', newStreak);
      }
  
      return res.redirect('back');
    } catch (err) {
      console.log('Error in updating streak', err);
      return res.redirect('/');
    }
  };
  

function getDate(index) {
  const today = new Date();
  today.setDate(today.getDate() + index);
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return `${date}/${month}/${year}`;
}
