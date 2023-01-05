//DOM Elements

var nine = document.getElementById("hour-9")
var ten = document.getElementById("hour-10")
var eleven = document.getElementById("hour-11")
var twelve = document.getElementById("hour-12")
var thirteen = document.getElementById("hour-13")
var fourteen = document.getElementById("hour-14")
var fifteen = document.getElementById("hour-15")
var sixteen = document.getElementById("hour-16")
var seventeen = document.getElementById("hour-17")

// Clock on top of page, taken from mini-project 5

var today = dayjs().format('MMM D, YYYY hh:mm a') //two digits for hour and a for displaying am or pm
$('#time-display').text(today);


function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    today = dayjs().format('MMM D, YYYY hh:mm a') //updates the variable today
    $('#time-display').text(today); //renders after it's been updated

  }, 1000); 
}

setTime() //calls setTime function when page is loaded

//pseudocode I want to keep

//past is grey
//present is red
//future is green

//if current hour < time
//make it future
//if current hour = time
//make it present
//if current hour > time
//make it past

function checkTime() {
  time = dayjs().format('H') 
  var times = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen] //array of objects
  console.log(times)

  for (var i=0; i < times.length; i++) { // for each element in the array return the hour as an integer
    var blockValue = parseInt(times[i].innerText)
    if (blockValue<9) {
      blockValue = blockValue + 12 // converts to military time
    }
    if (time==blockValue) {
      times[i].classList.add("present")
    } else if (time<blockValue) { //current time is less time in block than its in future
      times[i].classList.add("future")
    } else {
      times[i].classList.add("past")
    }
  }
}

checkTime() //calls functions when page loads
setInterval(checkTime, 60000) //recalls function every minute, so it should
//update hour in real time w/0 refreshing


//sets item in local storage

$(".saveBtn").on("click", function () {
  console.log(this)
  var userInput = $(this).siblings(".description").val()
  var timeOfDay = $(this).parent().attr("id")
  localStorage.setItem(timeOfDay, userInput)
})

//renders the local storage

$(document).ready(function () {
  console.log(localStorage.getItem("hour-9"))
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
});











