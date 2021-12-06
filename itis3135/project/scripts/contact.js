function submit() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var streaming = document.getElementById("streaming").value;
  var artwork = document.getElementById("artwork").value;



alert("Thank you for filling out our form " + fullname + "!" + "\n" +
"Please check if this information is correct" + "\n" + "Email: " + email + "\n" + "Phone: " + number);
}

$(document).ready(function(){
  $("input").focus(function(){
  $(this).css("background-color", "yellow");
});
  $("input").blur(function(){
  $(this).css("background-color", "green");
});
});

$( function() {
  $( "#datepicker" ).datepicker();
});