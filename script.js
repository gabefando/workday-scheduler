var a = moment().format("hh").toString();
var b = moment().format("hh");

document.getElementById('currentDay').innerHTML = a;

// Code for 1am block
var input1am = document.getElementById('input1am');
var btn1am = document.getElementById("1ambtn");
var del1am = document.getElementById("1amdel");
var block1am = document.getElementById('1am');
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
        input1am.innerText = x;
    }
    if (b == "01") {
        block1am.classList.add("present");
    } else if (b > "01") {
        block1am.classList.add("past");
    } else {
        block1am.classList.add("future");
    }
}

// Code for 2am block
var input2am = document.getElementById('input2am');
var btn2am = document.getElementById("2ambtn");
var del2am = document.getElementById("2amdel");
var block2am = document.getElementById('2am');
check2am();
btn2am.addEventListener("click", function(){
    localStorage.setItem("task2am", input2am.value);
    check2am;
})
del2am.addEventListener("click", function(){
    localStorage.removeItem("task2am");
    input2am.textContent = '';
})
function check2am() {
    if (localStorage.getItem("task2am")) {
        let x = localStorage.getItem("task2am");
        input2am.innerText = x;
    }
    if (b == "02") {
        block2am.classList.add("present");
    } else if (b > "02") {
        block2am.classList.add("past");
    } else {
        block2am.classList.add("future");
    }
}

// Code for 3am block
var input3am = document.getElementById('input3am');
var btn3am = document.getElementById("3ambtn");
var del3am = document.getElementById("3amdel");
var block3am = document.getElementById('3am');
check3am();
btn3am.addEventListener("click", function(){
    localStorage.setItem("task3am", input3am.value);
    check3am;
})
del3am.addEventListener("click", function(){
    localStorage.removeItem("task3am");
    input3am.textContent = '';
})
function check3am() {
    if (localStorage.getItem("task3am")) {
        let x = localStorage.getItem("task3am");
        input3am.innerText = x;
    }
    if (b == "03") {
        block3am.classList.add("present");
    } else if (b > "03") {
        block3am.classList.add("past");
    } else {
        block3am.classList.add("future");
    }
}

// Code for 4am block
var input4am = document.getElementById('input4am');
var btn4am = document.getElementById("4ambtn");
var del4am = document.getElementById("4amdel");
var block4am = document.getElementById('4am');
check4am();
btn4am.addEventListener("click", function(){
    localStorage.setItem("task4am", input4am.value);
    check4am;
})
del4am.addEventListener("click", function(){
    localStorage.removeItem("task4am");
    input4am.textContent = '';
})
function check4am() {
    if (localStorage.getItem("task4am")) {
        let x = localStorage.getItem("task4am");
        input4am.innerText = x;
    }
    if (b == "04") {
        block4am.classList.add("present");
    } else if (b > "04") {
        block4am.classList.add("past");
    } else {
        block4am.classList.add("future");
    }
}

// Code for 5am block
var input5am = document.getElementById('input5am');
var btn5am = document.getElementById("5ambtn");
var del5am = document.getElementById("5amdel");
var block5am = document.getElementById('5am');
check5am();
btn5am.addEventListener("click", function(){
    localStorage.setItem("task5am", input5am.value);
    check5am();
})
del5am.addEventListener("click", function(){
    localStorage.removeItem("task5am");
    input5am.textContent = '';
})
function check5am() {
    if (localStorage.getItem("task5am")) {
        let x = localStorage.getItem("task5am");
        input5am.innerText = x;
    }
    if (b == "05") {
        block5am.classList.add("present");
    } else if (b > "05") {
        block5am.classList.add("past");
    } else {
        block5am.classList.add("future");
    }
}

// Code for 6am block
var input6am = document.getElementById('input6am');
var btn6am = document.getElementById("6ambtn");
var del6am = document.getElementById("6amdel");
var block6am = document.getElementById('6am');
check6am();
btn6am.addEventListener("click", function(){
    localStorage.setItem("task6am", input6am.value);
    check6am();
})
del6am.addEventListener("click", function(){
    localStorage.removeItem("task6am");
    input6am.textContent = '';
})
function check6am() {
    if (localStorage.getItem("task6am")) {
        let x = localStorage.getItem("task6am");
        input6am.innerText = x;
    }
    if (b == "06") {
        block6am.classList.add("present");
    } else if (b > "06") {
        block6am.classList.add("past");
    } else {
        block6am.classList.add("future");
    }
}

// Code for 7am block
var input7am = document.getElementById('input7am');
var btn7am = document.getElementById("7ambtn");
var del7am = document.getElementById("7amdel");
var block7am = document.getElementById('7am');
check7am();
btn7am.addEventListener("click", function(){
    localStorage.setItem("task7am", input7am.value);
    check7am();
})
del7am.addEventListener("click", function(){
    localStorage.removeItem("task7am");
    input7am.textContent = '';
})
function check7am() {
    if (localStorage.getItem("task7am")) {
        let x = localStorage.getItem("task7am");
        input7am.innerText = x;
    }
    if (b == "07") {
        block7am.classList.add("present");
    } else if (b > "07") {
        block7am.classList.add("past");
    } else {
        block7am.classList.add("future");
    }
}