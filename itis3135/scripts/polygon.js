
//Ask the user to input a number
number_sides = window.prompt("The Joyful Penguin would like your number");
validateEntry(number_sides);
getShape(number_sides);



function getShape(number_sides){


//Print names of the polygon that matches the side number

if(number_sides == 1){
document.write("This is a Henagon! ");
}else if (number_sides == 2){
document.write("This is a Digon!");
}else if (number_sides == 3){
document.write("This is a Trigon!");
}else if (number_sides == 4){
document.write("This is a Tetragon");
}else if (number_sides == 5){
document.write("This is a Pentagon!");
}else if (number_sides == 6){
document.write("This is a Hexagon!");
}else if (number_sides == 7){
document.write("This is a Heptagon!");
}else if (number_sides == 8){
document.write("This is a Octagon!");
}else if (number_sides == 9){
document.write("This is a Nonagon!");
}else if (number_sides == 10){
document.write("This is a Decagon!");
}

}



function validateEntry(number){


//If number is a string alert the user this is invalid

if(isNaN(number)){
alert("Invalid statement");
}

if(number <= -10.4){
alert("Invalid number");
}

if(number < 1){
return number_sides = Math.abs(number_sides);

}

if(number > 10.5){
alert("Invalid number");
}

//If decimal round to nearest integer

if(number > 0.5 || number < 10.5){
return number_sides = Math.round(number_sides);

}


 
}














