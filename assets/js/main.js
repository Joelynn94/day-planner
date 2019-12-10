let todaysDate = document.querySelector("#todaysDate");
let currentTime = moment().format('LTS');
let startOfHour = moment().startOf('hour').fromNow();
let labelValue = document.querySelectorAll(".input-group-text");

// set todaysDate and format using moment JS
todaysDate = moment().format("dddd, MMMM Do"); 
// append todaysDate to the page
$("#todaysDate").append(todaysDate);

function checkHour() {

    for(let i = 0; i < labelValue.length; i++){
        labelValue.text = labelValue[i];
        console.log(labelValue.text)
    }
    
}

checkHour();
console.log(currentTime)
console.log(startOfHour)
