function myAlert(){
alert("Hey my script is running");
}

function timesTen(){
x = prompt("Type a number!");
return x * 10;
}

const date = new Date();
let company = "Pires Inc.";
var user = prompt("Please enter your name");
var feeling = prompt("How are you you doing?");
document.write("Today is " + date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " and the time is " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

document.write(" The " + company + " welcomes you, " + user + "!");
document.write(" We're glad you are doing " + feeling + "!");

