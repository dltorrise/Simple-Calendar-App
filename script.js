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






$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var today = dayjs().format('MMM D, YYYY hh:mm a') //two digits for hour and a for displaying am or pm
$('#time-display').text(today);

setInterval(setTime, 1000); //calls the setTime function every second and this function is called when the page loads

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    today = dayjs().format('MMM D, YYYY hh:mm a') //updates the variable today
    $('#time-display').text(today); //renders after it's been updated

  }, 1000);
}

function checkTime() {
  time = dayjs().format('h') //military time
  var times = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen] //array of objects
  console.log(times)
  for (var i=0; i < times.length; i++) { // for each element in the array return the hour as an integer
    var variable = parseInt(times[i].innerText)
    console.log(variable)
  }
}

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
checkTime();
