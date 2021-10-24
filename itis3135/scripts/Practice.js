var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {

var total = 0;
	
document.getElementById("Espresso").onclick = function() {Espresso()};
document.getElementById("Cappuccino").onclick = function() {Cappuccino()};

	
function Espresso(){

document.getElementById("order").innerHTML += ("$1.95" + " - " + "Espresso" + " - " +  "Delicious espresso. Wanna try it?");

total += 1.95;

document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);

}

function Cappuccino(){ 

		
document.getElementById("order").innerHTML += ("$3.45" + " - " + "Cappuccino" + " - " + "Delicious Cappuccino!" + "\n");

		
total += 3.45;

		
document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);

}
}
; 