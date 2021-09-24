function myAlert(){
alert("Hey my script is running");
}

function timesTen(){
var number = prompt("Enter a number");
document.write(number * 10);
}

function addCombine(){
var x = prompt("Enter a number");
var y = prompt("Enter another number");
document.write(x + y);
}

const date = new Date();
let company = "Pires Inc.";
var user = prompt("Please enter your name");
var feeling = prompt("How are you you doing?");
document.write("Today is " + date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " and the time is " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

document.write(" The " + company + " welcomes you, " + user + "!");
document.write(" We're glad you are doing " + feeling + "!");

