/*
    In this activity, you will be making a simple fetch api call to the url provided to request some data stored there.
    In the first stage of this challenge, your task is to use the provided code to make the fetch request and then console log the data.
    If your team has time, update our code using the async/await keywords!
*/

function makeCall() {
  // Use the fetch api to display some simple user data to the console!
  url = "https://reqres.in/api/users";

  
  fetch(url ) // call the fetch api with the correct input argument!
    .then(function(response) {
      return response.json();
    }
    ) // convert the returned data into a json using the object's built-in methods.
    .then(function(response) {
      console.log(response.data[0]);
    }
    ) // use the resulting json to display some of our user information in the console.
    .catch(); // console.log an error message in case something goes wrong.

};

//makeCall();