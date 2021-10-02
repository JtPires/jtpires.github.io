
number_sides = window.prompt("The Joyful Penguin would like your number 1-10");
validateEntry(number_sides);
getShape(number_sides);



function getShape(number_sides){

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



function validateEntry(number_sides){
number_sides = Math.abs(Math.round(number_sides));

if(isNaN(number_sides)){
alert("Invalid statement");
}

if(number_sides < .5 || number_sides > 10.5){
document.write("Invalid number");

}
}















