function submit() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var location = document.getElementById("location").value;



window.alert("Thank you for filling out our form " + fullname + "!" + "\n" + "Email: " + email + "\n" + "Phone: " + number + "\n" + "Location: " + location);
}