var timeBlock = document.querySelector(".time-block")
var container = document.querySelector(".container")

var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

// Todays Date
var rightNow = document.querySelector("#currentDay");
function clock() {
    rightNow.textContent = moment().format("dddd, MMMM Do, YYYY, h:mm:ss");
} setInterval(clock,1000);


// Color-code time blocks
// var hour = moment().format("ha")
// var hours = document.querySelector("#time-block")
// for (var i = 0; i < hours.length; i++) {
//     if (string)
// }


