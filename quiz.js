// JavaScript code to add interactivity to the website

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
                for (var i = 0; i < form.elements.length -1 ; i++) {

                  // Check if the input is checked and matches with correct answer
                  if (form.elements[i].checked && form.elements[i].value == answers[i]) {

                    // Increment score by one
                    score++;

                    // Display correct feedback message
                    feedback.innerHTML += "<p class='correct'>Question " + (i+1) + ": Correct!</p>";

                  } else if (form.elements[i].checked && form.elements[i].value != answers[i]) {

                    // Display wrong feedback message with correct answer
                    feedback.innerHTML += "<p class='wrong'>Question " + (i+1) + ": Wrong! The correct answer is " + answers[i] + "</p>";

                  }
                }

                // Calculate score percentage and round it to two decimal places
                var percentage = Math.round((score / answers.length) *10000)/100;

                // Display score percentage in feedback element
                feedback.innerHTML += "<p class='score'>Your score is " + percentage + "%</p>";

                // Show feedback element and hide submit button
                feedback.style.display = "block";
                submit.style.display = "none";

              });