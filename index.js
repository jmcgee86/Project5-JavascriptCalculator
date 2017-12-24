var numClass = document.getElementsByClassName("calcNum");
var opClass = document.getElementsByClassName("operators");
var display = document.getElementById("disp");
var allInputs = [];
var numInput = 0;
var runningTotal = 0;
var numberClick = function() {
	var numVal = this.value;
	if (numInput == 0) {
		numInput = numVal;
	} else {
		numInput += numVal;
	}
	display.innerHTML = numInput;
};
var operatorClick = function() {
	var opVal = this.value;
	equals();
	allInputs.push(opVal);
};

function equals() {
	allInputs.push(numInput);
	for (var i = 0; i < allInputs.length; i++) {
		if (allInputs[i] == "add") {
			runningTotal += parseFloat(allInputs[i + 1], 10);
			i++;
		} else if (allInputs[i] == "subtract") {
			runningTotal -= parseFloat(allInputs[i + 1], 10);
			i++;
		} else if (allInputs[i] == "multiply") {
			runningTotal *= parseFloat(allInputs[i + 1], 10);
			i++;
		} else if (allInputs[i] == "divide") {
			runningTotal /= parseFloat(allInputs[i + 1], 10);
			i++;
		} else {
			runningTotal += parseFloat(allInputs[i], 10);
		}
	}
	allInputs = [];
	numInput = 0;
	display.innerHTML = runningTotal;
}
//adds numberClick function to number buttons of calculator
for (var i = 0; i < numClass.length; i++) {
	numClass[i].addEventListener('click', numberClick);
}
//adds operatorClick function to operator buttons of calculator
for (var i = 0; i < opClass.length; i++) {
	opClass[i].addEventListener('click', operatorClick);
}
document.getElementById("ce").addEventListener('click', function() {
	allInputs = [];
	numInput = 0;
	runningTotal = 0;
	display.innerHTML = 0;
});
document.getElementById("eq").addEventListener('click', equals);
document.getElementById("clear").addEventListener('click', function() {
	numInput = 0;
	display.innerHTML = runningTotal;
});