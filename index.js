/* global $ */
var classname = document.getElementsByClassName("calcNum");
var clicked = [];
var display = "";
var myFunction = function() {
    var val = this.value;
    clicked.push(val);
    display = clicked.join("");
    document.getElementById("disp").innerHTML = display;
    console.log(val);
    };

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction);
}

