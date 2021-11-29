/*
PROJECT: CAPSTONE
DATE: 15/10/2021
AUTHORS (alphabetical order):
Katarzyna Kalisz
JavaScript responsible for display of suitable greeting on homepage.
*/

var Time_of_The_Day = new Date()
var hours = Time_of_The_Day.getHours()

if (hours >= 5 && hours <= 11)
    //GREETING MESSAGE FOR MORNING
    document.write('<h1>Good morning, <br> Let us look for a perfect home</h1>')
else if (hours == 12)
    //GREETING MESSAGE FOR NOON
    document.write('<h1>Hello, I hope you are having a nice day. <br> Let us look for a perfect home </h1>')
else if (hours >= 13 && hours <= 17)
    //GREETING MESSAGE FOR AFTERNOON
    document.write('<h1>Good Afternoon, <br> Let us  look for a perfect home </h1>')
else if (hours >= 18 && hours <= 20)
    //MESSAGE FOR EVENING (6pm-8pm)
    document.write('<h1>Good Evening. <br> Let us look for a perfect home</h1>')
else if (hours >= 21 && hours <= 24)
    //GREETING MESSAGE FOR NIGHT (9pm-11pm)
    document.write('<h1>Let us look for a perfect home tonight,</h1>')
else
    //GREETING MESSAGE FOR LATE NIGHT (12pm-4am)
    document.write('<h1>Still awake? Let us look for a perfect home.</h1>')
