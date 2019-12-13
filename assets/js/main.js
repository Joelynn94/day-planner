let todaysDate = document.querySelector("#todaysDate");
const saveBtn = document.querySelectorAll(".saveBtn");

let now = moment();

// set todaysDate and format using moment JS
todaysDate = now.format("dddd, MMMM Do"); 
// append todaysDate to the page
$("#todaysDate").append(todaysDate);

let currentHour = now.hour();
console.log(currentHour)


    // grab the inputs
    const inputs = $('.form-control')

    // loop through all of the inputs
    for (let i = 0; i < inputs.length; i++) {

        // Get all elements that contain a data-id attribute
        let dataId = ($(inputs[i]).siblings(".input-group-text").attr("data-hour"))
        console.log(dataId)

        if(dataId < currentHour){
            $( ".input-group-text" ).addClass( ".past" );
        } else if (dataId === currentHour){
            $( ".input-group-text" ).addClass( ".present" );
        } else {
            $( ".input-group-text" ).addClass( ".future" );
        }
    }

      
      

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

