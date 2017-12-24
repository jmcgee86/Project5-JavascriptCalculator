var numClass = document.getElementsByClassName("calcNum");
var opClass = document.getElementsByClassName("operators");
var display = document.getElementById("disp");
var equation = [];
var numInput = 0;
var runningTotal = 0;

var numberClick = function () {
    var numVal = this.value
    if (numInput == 0){
        numInput = numVal;
        } else{
    numInput += numVal;
        }
    display.innerHTML = numInput
    console.log(equation)
    };
var operatorClick = function(){
    console.log(equation);
    equation.push(numInput);
    numInput = 0;
    var opVal = this.value;
    equation.push(opVal);
};

function equals(){
    equation.push(numInput);
    console.log(equation);
    for (var i = 0; i<equation.length; i++){
        if (equation[i] == "add") {
				runningTotal += parseFloat(equation[i + 1], 10);
				i++;
				console.log("after addition, result is " + runningTotal);
			} else if (equation[i] == "subtract") {
				runningTotal -= parseFloat(equation[i + 1],10);
				i ++;
				console.log("after subtraction, result is " + runningTotal);
			} else if (equation[i] == "multiply") {
				runningTotal *= parseFloat(equation[i + 1],10);
				i ++;
				console.log("after multiplication, result is " + runningTotal);
			} else if (equation[i] == "divide") {
				runningTotal /= parseFloat(equation[i + 1], 10);
				i ++;
				console.log("after division, result is " + runningTotal);
			} else{  
				runningTotal += parseFloat(equation[i], 10);
			}
		}
		equation = [];
		numInput = 0;
		display.innerHTML = runningTotal;
    }

//adds numberClick function to number buttons of calculator
for (var i = 0; i < numClass.length; i++) {
    numClass[i].addEventListener('click', numberClick);
}
//adds operatorClick function to operator buttons of calculator
for (var i=0; i<opClass.length; i++){
    opClass[i].addEventListener('click', operatorClick);
}

document.getElementById("eq").addEventListener('click', equals());