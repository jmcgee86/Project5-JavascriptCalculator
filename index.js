/* global $ */
var classname = document.getElementsByClassName("calcNum");

var myFunction = function() {
    var val = this.value;
    console.log(val);
    };
//    alert(value);
//};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction);
}

