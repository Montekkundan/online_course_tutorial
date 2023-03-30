
  
// Author: John, Anisa and Montek
// Date: 29-03-2023 


// Get a reference to the form element
var form = document.getElementById("quiz");

// Get a reference to the submit button
var submit = document.getElementById("submit");

// Get a reference to the feedback element
var feedback = document.getElementById("feedback");

// Add an event listener to handle form submission
submit.addEventListener("click", function(event) {

  // Prevent default form submission behavior
  event.preventDefault();

  // Declare a variable to store quiz score
  var score = 0;

  // Declare an array of correct answers
  var answers = ["A", "B", "A", "B", "C"];

  // Loop through each question in the form
  for (var i = 0; i < answers.length; i++) {
    // Get the name of the radio buttons for each question
    var name = "q" + (i + 1);

    // Use querySelector to get the checked radio button for each question
    var checked = form.querySelector("input[name=" + name + "]:checked");

    // Check if the checked radio button matches with correct answer
    if (checked && checked.value == answers[i]) {

      // Increment score by one
      score++;

      // Display correct feedback message
      feedback.innerHTML += "<p class='correct'>Question " + (i+1) + ": Correct!</p>";

    } else {

      // Display wrong feedback message with correct answer
      feedback.innerHTML += "<p class='wrong'>Question " + (i+1) + ": Wrong! The correct answer is " + answers[i] + "</p>";

    }
  }

  // Calculate score percentage and round it to two decimal places
  var percentage = Math.round((score / answers.length) *10000)/100;

  // Display score percentage in feedback element
  feedback.innerHTML += "<p class='score'>Your score is " + percentage + "%</p>";
  feedback.innerHTML += '<input class="retry" type="button" value="Reload Page" onclick="window.location.reload()" />';


  // Show feedback element and hide submit button
  feedback.style.display = "block";
  submit.style.display = "none";

});