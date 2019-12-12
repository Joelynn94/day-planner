let todaysDate = document.querySelector("#todaysDate");
const saveBtn = document.querySelectorAll(".saveBtn");

let now = moment();

// set todaysDate and format using moment JS
todaysDate = now.format("dddd, MMMM Do"); 
// append todaysDate to the page
$("#todaysDate").append(todaysDate);

let currentHour = now.format('h:mma');
console.log(currentHour)

let beginningTime = moment('9:00am', 'h:mma');
let endTime = moment('5:00pm', 'h:mma');
console.log(beginningTime.isBefore(endTime)); // true 



// Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

function saveText () {
    // get value of the input box
    inputText = $(".form-control").val().trim();

    if (inputText !== ""){
        // key : value to save input text
        const hour = {
            hour9: $("#hour9").val(),
            hour10: $("#hour10").val(),
            hour11: $("#hour11").val(),
            hour12: $("#hour12").val(),
            hour13: $("#hour13").val(),
            hour14: $("#hour14").val(),
            hour15: $("#hour15").val(),
            hour16: $("#hour16").val(),
            hour17: $("#hour17").val()

        };

        localStorage.setItem("hour", JSON.stringify(hour));

        let hourEvent = JSON.parse(localStorage.getItem("hour"));

        $("#hour9").text(hourEvent.hour9);
        $("#hour10").text(hourEvent.hour10);
        $("#hour11").text(hourEvent.hour11);
        $("#hour12").text(hourEvent.hour12);
        $("#hour13").text(hourEvent.hour13);
        $("#hour14").text(hourEvent.hour14);
        $("#hour15").text(hourEvent.hour15);
        $("#hour16").text(hourEvent.hour16);
        $("#hour17").text(hourEvent.hour17);
    }
}


$(".saveBtn").on("click", saveText);

