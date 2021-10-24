
//Ask the user to input a number
number_sides = window.prompt("The Joyful Penguin would like your number")
valid_sides = validateEntry(number_sides);
getShape(valid_sides);



function getShape(number_sides){


//Print names of the polygon that matches the side number

if(number_sides == 1){
alert("This is a Henagon! ");
}else if (number_sides == 2){
alert("This is a Digon!");
}else if (number_sides == 3){
alert("This is a Trigon!");
}else if (number_sides == 4){
alert("This is a Tetragon");
}else if (number_sides == 5){
alert("This is a Pentagon!");
}else if (number_sides == 6){
alert("This is a Hexagon!");
}else if (number_sides == 7){
alert("This is a Heptagon!");
}else if (number_sides == 8){
alert("This is a Octagon!");
}else if (number_sides == 9){
alert("This is a Nonagon!");
}else if (number_sides == 10){
alert("This is a Decagon!");
}

}



function validateEntry(number_sides){

valid_sides = Math.abs(number_sides);
valid_sides = Math.round(valid_sides);

do{
if(valid_sides < 0 || valid_sides > 10){
valid_sides = alert("Invalid Input");
}
} 
while (valid_sides > 10)
return valid_sides;
}














