// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDlPihhKmdaguV2xbEhqlFiF09yQP961Uo",
    authDomain: "social-media-d150f.firebaseapp.com",
    databaseURL: "https://social-media-d150f.firebaseio.com",
    projectId: "social-media-d150f",
    storageBucket: "social-media-d150f.appspot.com",
    messagingSenderId: "68817413327"
  };
  firebase.initializeApp(config);
  // This is the connection to the firebase database
var database = firebase.database();


var registerName = database.ref('/register');

registerName.on('value', function (values) {

  values.forEach(function(listItem) {

    var item = listItem.val();

    addItemElementToList(item.name);

  });
});


// Get the input box element from the HTML and
// return the string value from it
function getItemNameFromInput(){
  var inputElement = document.querySelector("input");
  return inputElement.value;
}

// This is the callback that gets triggered when a
// user clicks on the button
function buttonClickHandler(){
  var itemName = getItemNameFromInput();

  if (itemName.length > 0) {

    var newItem = {
      name: itemName,
    };
console.log(newItem)
    registerName.push(newItem);

    clearInput();
  } else {
    alert("You didn't enter your name!");
  }
}

var button = document.querySelector("#registerbtn");
button.addEventListener("click", buttonClickHandler)



//Password strength function
function validatePassword(password) {

    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}


  function changeTextSize() {

  document.getElementById("jumbotron").style.fontSize = "24px";

}
