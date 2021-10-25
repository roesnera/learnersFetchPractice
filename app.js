const button = document.getElementById('getResults')
button.addEventListener('click', function() {
// Use the fetch api to display some simple user data!

url = 'https://reqres.in/api/users'


// the function that will return the final string to be added to our HTML

function stringBuilder(data) {
    //do something
}


// call the fetch api with the correct input argument!
fetch()
    // convert the returned data into a json using the object's built-in methods
    .then()
    // pass the resulting json into our stringBuilder function and then display the information on our web page!
    .then()
    // console.log an error message in case something goes wrong
    .catch()
})