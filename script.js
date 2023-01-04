//Finish up interval function
//add save button
//add local storage
//add a background because this white is boring

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 

var nine = document.getElementById("hour-9")
var ten = document.getElementById("hour-10")
var eleven = document.getElementById("hour-11")
var twelve = document.getElementById("hour-12")
var thirteen = document.getElementById("hour-13")
var fourteen = document.getElementById("hour-14")
var fifteen = document.getElementById("hour-15")
var sixteen = document.getElementById("hour-16")
var seventeen = document.getElementById("hour-17")






// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });

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
//past is grey
//present is red
//future is green

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

// setInterval(checkTime, 60000) //calls function every minute


$(".saveBtn").on("click", function () {
  console.log(this)
  var userInput = $(this).siblings(".description").val()
  var timeOfDay = $(this).parent().attr("id")
  localStorage.setItem(timeOfDay, userInput)
}) //this does work


//if current hour < time
//make it future
//if current hour = time
//make it present
//if current hour > time
//make it past
//getting current hour from dayjs
//getting time from id
//somehow extract number from the id
//create if statements to set attribute


