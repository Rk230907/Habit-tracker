# Habit-tracker

-----There are total 3 routes added 

i -  One can create it's own habit, and can be displayed on the home page. ie. ('/')

ii - One can open the particular habit to get a detailed view of that habit and keep a track of it  ('/habit/streak/:id')

iii - One can submit his activity for a day and can also change his activity for the previous 6 days. ('/habit/streak/update/dates')


-----Front end
The functionality to navigate to the detailed vew and submit your activities is there. Also after submission, navigating back to home is also there.


------Mongoose Scehma

There are total 2 scehma, 1 for habit which store the habits of user, and another for detailed view of habit which references to the Habit scehma.

