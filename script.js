var a = moment().toString();
document.getElementById('currentDay').innerHTML = a;

let task = {
    task: 'test'
};

var task_ser = JSON.stringify(task);

localStorage.setItem("task", task_ser);
console.log(localStorage);