const Habit = require('../models/habits');


module.exports.home = async function(req, res){
    try{
        // Fetch all the habits from the database
        const habits = await Habit.find({}); 
        
        return res.render('home_page', {
            title: "My Habits | Home",
            Habit: habits
        });
    }catch(err){
        console.log(err);
    }
    
}