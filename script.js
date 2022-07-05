var a = moment('MM/DD/YYYY').toString();
document.getElementById('currentDay').innerHTML = a;

var input1am = document.getElementById('input1am');
var btn1am = document.getElementById("1ambtn");
var del1am = document.getElementById("1amdel");
check1am();
btn1am.addEventListener("click", function(){
    localStorage.setItem("task1am", input1am.value);
    check1am;
})
del1am.addEventListener("click", function(){
    localStorage.removeItem("task1am");
    input1am.textContent = '';
})
function check1am() {
    if (localStorage.getItem("task1am")) {
        let x = localStorage.getItem("task1am");
        input1am.textContent = x;
    }
    // if 1am > 12am && 1am < 2am change background color to .present
}
