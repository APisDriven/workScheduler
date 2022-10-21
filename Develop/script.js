var timeBlock = document.querySelector(".time-block")
var container = document.querySelector(".container")

var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

// Todays Date
var rightNow = document.querySelector("#currentDay");
function clock() {
    rightNow.textContent = moment().format("dddd, MMMM Do, YYYY, h:mm:ss");
} setInterval(clock,1000);

// Save Scheduling Tasks

function timeTrack() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop through time blocks
    $(".time-block").each(function () {
        var blockTime = $(this).children("textarea").attr("id");
        blockTime = parseInt(blockTime)

        console.log(blockTime)
        // change class based on time
        if (blockTime < timeNow) {
            $(this).children("textarea").removeClass("future");
            $(this).children("textarea").removeClass("present");
            $(this).children("textarea").addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).children("textarea").removeClass("past");
            $(this).children("textarea").removeClass("future");
            $(this).children("textarea").addClass("present");
        }
        else {
            $(this).children("textarea").removeClass("present");
            $(this).children("textarea").removeClass("past");
            $(this).children("textarea").addClass("future");

        }
    })
}

function init () {
    var saveBtnEl = $(".saveBtn") 

    saveBtnEl.on("click", function () {
        var time = $(this).attr("data-id");
        var text = $(this).siblings(".description").val();

        // Save values locally
        localStorage.setItem(time, text);
    })
   
   

    // Get item from local storage if any
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));

    
}
init ();
timeTrack();
