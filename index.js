/* global $ */
var display = [];

document.getElementById("decimal").addEventListener("click", toDisplay);

function toDisplay(){
        var val = document.getElementsByClassName("calcNum").value;
        display.push(val);
        document.getElementById("disp").innerHTML= display;
        console.log("test");
    }//to use getElementsByClassName, use forloop to give to each occurence of class name

//document.getElementById("disp").innerHTML= display;

/*$('.calcNum').click(function(id) {
//var display=document.getElementsByClassName('calcNum').innerHTML;
 document.getElementById("disp").innerHTML = display;
});*/

