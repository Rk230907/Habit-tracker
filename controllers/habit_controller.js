const Habit = require('../models/habits');


module.exports.habit = async function (req, res) {
    // const htmlContent = '<p>Ok</p>';
    // return res.send(htmlContent);

    // Create the habit in the DB
    
    try {
        let habit = await Habit.create({
            content: req.body.habitName,
            time: req.body.habitTime
        });

        return res.redirect('back');
    } catch (err) {
        console.log('Error in creating habit', err);
    }
    
}