function validateForm() {
 var x = document.forms["myForm"]["fname"].value;
 if (x == "") {
   alert("Name must be filled out");
   return false;
 }
}


  function changeTextSize() {

  document.getElementById("jumbotron").style.fontSize = "24px";

}
