 // Get the joke element
 const jokeElement = document.getElementById("joke");

 // Get the refresh button
 const refreshButton = document.getElementById("refresh");

 // Function to fetch a new dad joke
 function fetchJoke() {
   // Create a new XMLHttpRequest object
   const xhr = new XMLHttpRequest();

   // Set the request method and URL
   xhr.open("GET", "https://icanhazdadjoke.com/", true);

   // Set the Accept header to receive JSON response
   xhr.setRequestHeader("Accept", "application/json");

   // Set the onload event handler
   xhr.onload = function() {
     if (xhr.status === 200) {
       // Parse the JSON response
       const response = JSON.parse(xhr.responseText);

       // Get the joke from the response
       const joke = response.joke;

       // Update the joke element with the new joke
       jokeElement.innerText = joke;
     }
   };

   // Send the request
   xhr.send();
 }

 // Add a click event listener to the refresh button
 refreshButton.addEventListener("click", fetchJoke);

 // Fetch the initial dad joke
 fetchJoke();