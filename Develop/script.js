var timeBlock = document.querySelector(".time-block")
var container = document.querySelector(".container")

var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

// Todays Date
var rightNow = document.querySelector("#currentDay");
function clock() {
    rightNow.textContent = moment().format("dddd, MMMM Do, YYYY, h:mm:ss");
} setInterval(clock,1000);

// Save Scheduling Tasks



function init () {
    var saveBtnEl = document.querySelector(".saveBtn") 

    saveBtnEl.addEventListener("click", function () {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        // Save values locally
        localStorage.setItem(time, text);
    })
   
    function timeTrack() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop through time blocks
        $(".time-block").each(function () {
            var blockTime = timeBlock.name;

            // change class based on time
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#9am.description").val(localStorage.getItem("hour9"));
    $("#10am.description").val(localStorage.getItem("hour10"));
    $("#11am.description").val(localStorage.getItem("hour11"));
    $("#12pm.description").val(localStorage.getItem("hour12"));
    $("#1pm.description").val(localStorage.getItem("hour13"));
    $("#2pm.description").val(localStorage.getItem("hour14"));
    $("#3pm.description").val(localStorage.getItem("hour15"));
    $("#4pm.description").val(localStorage.getItem("hour16"));
    $("#5pm.description").val(localStorage.getItem("hour17"));

    timeTrack();
}

