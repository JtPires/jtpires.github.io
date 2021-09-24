function myAlert(){
alert("Hey my script is running");
}

function timesTen(){
const number = prompt("Enter a number to be multiplied by 10");
document.write("The product is" + ": " + number * 10);
}

function addCombine(){
const x = parseInt(prompt("Enter a number"));
const y = parseInt(prompt("Enter another number"));
const sum = x + y;
document.write("The sum is" + ": " + sum);
}

function findAverage(){
const x = parseInt(prompt("Enter a number"));
const y = parseInt(prompt("Enter another number"));
const z = parseInt(prompt("Enter the last number"));
const average = (x+y+z)/3;
document.write("The average is" + ": " + average);
}

function findArea(){
const x = parseInt(prompt("Enter a number"));
const y = parseInt(prompt("Enter another number"));
const area = x * y;
document.write("The area is" + ": " + area);
}

function feetToInches(){
const x = parseInt(prompt("Enter the amount in feet"));
const inch = parseFloat(x * 12);
document.write("The amount in inches is" + ": " + inch + " inches");
}




const date = new Date();
let company = "Pires Inc.";
var user = prompt("Please enter your name");
var feeling = prompt("How are you you doing?");
document.write("Today is " + date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " and the time is " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

document.write(" The " + company + " welcomes you, " + user + "!");
document.write(" We're glad you are doing " + feeling + "!");

