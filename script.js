let currentDate = new Date()
let hour = currentDate.getHours()
console.log(hour)
$(function () {
  //This section controls the coloring of the time blocks
if (hour > 9){
  $('#hour-9').addClass('past').removeClass('future')
} else if (hour = 9){
  $('#hour-9').addClass('present').removeClass('future')
}

if (hour > 10){
  $('#hour-10').addClass('past').removeClass('future')
} else if (hour = 10){
  $('#hour-10').addClass('present').removeClass('future')
}

if (hour > 11){
  $('#hour-11').addClass('past').removeClass('future')
} else if (hour = 11){
  $('#hour-11').addClass('present').removeClass('future')
}

if (hour > 12){
  $('#hour-12').addClass('past').removeClass('future')
} else if (hour = 12){
  $('#hour-12').addClass('present').removeClass('future')
}

if (hour > 13){
  $('#hour-13').addClass('past').removeClass('future')
} else if (hour = 13){
  $('#hour-13').addClass('present').removeClass('future')
}

if (hour > 14){
  $('#hour-14').addClass('past').removeClass('future')
} else if (hour = 14){
  $('#hour-14').addClass('present').removeClass('future')
}

if (hour > 15){
  $('#hour-15').addClass('past').removeClass('future')
} else if (hour = 15){
  $('#hour-15').addClass('present').removeClass('future')
}

if (hour > 16){
  $('#hour-16').addClass('past').removeClass('future')
} else if (hour = 16){
  $('#hour-16').addClass('present').removeClass('future')
}

if (hour > 17){
  $('#hour-17').addClass('past').removeClass('future')
} else if (hour = 17){
  $('#hour-17').addClass('present').removeClass('future')
}
//This is the end of time block color section
displaySaved()
function displaySaved(){
 let textsaved9 = localStorage.getItem('textsave9')
 $('#text9').val(textsaved9)
 let textsaved10 = localStorage.getItem('textsave10')
 $('#text10').val(textsaved10)
 let textsaved11 = localStorage.getItem('textsave11')
 $('#text11').val(textsaved11)
 let textsaved12 = localStorage.getItem('textsave12')
 $('#text12').val(textsaved12)
 let textsaved13 = localStorage.getItem('textsave13')
 $('#text13').val(textsaved13)
 let textsaved14 = localStorage.getItem('textsave14')
 $('#text14').val(textsaved14)
 let textsaved15 = localStorage.getItem('textsave15')
 $('#text15').val(textsaved15)
 let textsaved16 = localStorage.getItem('textsave16')
 $('#text16').val(textsaved16)
 let textsaved17 = localStorage.getItem('textsave17')
 $('#text17').val(textsaved17)
}

//This section saves the users input in the textareas and stores it
$('#save9').click(function(){
  let textsave9 = $('#text9').val()
  localStorage.setItem('textsave9', textsave9)
})
$('#save10').click(function(){
  let textsave10 = $('#text10').val()
  localStorage.setItem('textsave10', textsave10)
})
$('#save11').click(function(){
  let textsave11 = $('#text11').val()
  localStorage.setItem('textsave11', textsave11)
})
$('#save12').click(function(){
  let textsave12 = $('#text12').val()
  localStorage.setItem('textsave12', textsave12)
})
$('#save13').click(function(){
  let textsave13 = $('#text13').val()
  localStorage.setItem('textsave13', textsave13)
})
$('#save14').click(function(){
  let textsave14 = $('#text14').val()
  localStorage.setItem('textsave14', textsave14)
})
$('#save15').click(function(){
  let textsave15 = $('#text15').val()
  localStorage.setItem('textsave15', textsave15)
})
$('#save16').click(function(){
  let textsave16 = $('#text16').val()
  localStorage.setItem('textsave16', textsave16)
})
$('#save17').click(function(){
  let textsave17 = $('#text17').val()
  localStorage.setItem('textsave17', textsave17)
})
//End of saving users textarea input
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
