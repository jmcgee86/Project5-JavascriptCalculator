/* global $ */
var classname = document.getElementsByClassName("calcNum");
var clicked = [];
var display = 0;
var currentTotal = 0;
var myFunction = function() {
    var val = this.value;
    clicked.push(val);
    display = parseInt(clicked.join(""));
    document.getElementById("disp").innerHTML = display;
    console.log(val);
    };

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction);
}

function add(num1, num2){
    console.log("clicked add")
    clicked = [];
    num1=display;
    display = "";
    //currentTotal+=display;
    document.getElementById("disp").innerHTML=display;
    //display=currentTotal;
};

function subtract(num1, num2){
    
};

function multiply(num1, num2){
    
};

function divide(num1, num2){
    
};

function clearDisplay(){
    console.log('clear display clicked');
    clicked = [];
    display = 0;
    document.getElementById("disp").innerHTML = display;
    
};

function clearAll(){
    clicked = [];
    display = 0;
    currentTotal = 0;
    document.getElementById("disp").innerHTML = display;
    console.log('clear all clicked');
};

function equals(){
    console.log('clicked equals')
    display=currentTotal;
    document.getElementById("disp").innerHTML=display;
    clicked = [];
    
};