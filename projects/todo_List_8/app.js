var tasks = [];

function add_task() {
  var assign_task = document.getElementById("assign_task").value;
  if (assign_task.length < 3) {
    alert("task name must be greater then 2 words");
    return;
  }

  var obj = {
    id: new Date().getTime() + Math.floor(Math.random() * 999),
    date: new Date(),
    done: false,
    text: assign_task,
  };

  tasks.push(obj);
  assign_task.value = "";
  display_task();
  console.log(tasks);
}

function display_task() {
  var show = document.getElementById("task_Display");
  var task_name = tasks.pop();
  //   show.innerText = task_name.text;
  show.innerHTML += `<div class = "display_item" > 
  <button id = " delete " onclick="delete_task()"> Delete </button> 
  <button id = " edit " onclick="edit_task()"> Edit </button> 
  <button id = " edit " onclick="done_task()"> Done </button> 
  </div>`;
}

function delete_task() {}
function done_task() {}
