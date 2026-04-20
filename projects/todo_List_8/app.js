var tasks = [];
var value;
var edit = false;
var show = document.getElementById("task_Display"); // display
var input = document.getElementById("assign_task"); // get input text value
var edit_btn = document.getElementById("btn_container"); // for edit purpose
edit_btn.innerHTML = `<button id="add_task" onclick="add_task()">Add</button>`;
/* <button id="delete_all" onclick="delete_all()">Delete All</button>; */

function get_local_storage() {
  // local storage
  var task_data = window.localStorage.getItem("tasks");
  task_data = JSON.parse(task_data);

  if (task_data !== null) {
    tasks = task_data;
  }
  display_task();
}

get_local_storage();

function add_task() {
  var assign_task = document.getElementById("assign_task");
  if (assign_task.value.length < 3) {
    alert("task name must be greater then 2 words");
    return;
  }

  // Similiar tasks check
  for (var i = 0; i < tasks.length; i++) {
    if (assign_task.value == tasks[i].text) {
      var ans = prompt(
        "Tasks with similiar name already exists, Create new one ? ( Yes / no )",
      );
      if (ans == "no") {
        return;
      } else {
        break;
      }
    }
  }

  var obj = {
    id: new Date().getTime() + Math.floor(Math.random() * 999),
    date: new Date(),
    done: false,
    text: assign_task.value,
  };

  tasks.push(obj);
  var data = JSON.stringify(tasks);
  window.localStorage.setItem("tasks", data);
  // idx++;
  assign_task.value = "";
  display_task();
  console.log(tasks);
}

function display_task() {
  show.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var get_name = tasks[i]; // to get obj

    if (get_name.done == false && edit == false) {
      // when we create a new task
      edit_btn.innerHTML = `<button id="add_task" onclick="add_task()">Add</button>
      <button id="delete_all" onclick="delete_all()">Delete All</button>`;

      show.innerHTML += `<div class = "display_item" > 
      <span> ${get_name.text}</span>
      <button id = " delete " onclick="delete_task(${get_name.id})"> Delete </button> 
      <button id = " edit " onclick="edit_task(${get_name.id})"> Edit </button> 
      <button id = " done " onclick="done_task(${get_name.id})"> Done </button> 
      </div>`;
    } else if (edit == false && get_name.done == true) {
      show.innerHTML += `<div class = "display_item" > 
      <span> ${get_name.text}</span> 
      <button id = " undo " onclick="undo_task(${get_name.id})"> Undo </button>
      <button id = " delete " onclick="delete_task(${get_name.id})"> Delete </button> 
      </div>`;
    } else if (edit == true && get_name.done == false) {
      // when the task is not done and we have to edit it
      show.innerHTML += `<div class = "display_item" > 
      <span> ${get_name.text}</span>
      </div>`;
    } else {
      show.innerHTML += `<div class = "display_item" > 
      <span> ${get_name.text}</span> 
      <button id = " delete " onclick="delete_task(${get_name.id})"> Delete </button> 
      </div>`;
    }
  }
}

function undo_task(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      tasks[i].done = false;
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      display_task();
      return;
    }
  }
}

function delete_task(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (id == tasks[i].id) {
      tasks.splice(i, 1);
      window.localStorage.setItem("tasks", JSON.stringify(tasks)); // local storage
      break;
    }
  }
  display_task();
}

function done_task(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (id == tasks[i].id) {
      tasks[i].done = true;
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      display_task();
      return;
    }
  }
}

function update_task(id) {
  var value1 = input.value;
  for (var i = 0; i < tasks.length; i++) {
    if (value1 == tasks[i].text) {
      alert(
        "Can't update task, as the updated Task name is similiar to one of the existing task name",
      );
      return;
    }
  }
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      if (value == value1) {
        alert("Cant update task, as the name of the task is not changed ");
        return;
      }
      edit = false;
      tasks[i].done = false;
      tasks[i].text = input.value;
      window.localStorage.setItem("tasks", JSON.stringify(tasks)); // for local storage
      input.value = "";
      // alert("Updated Successfully ");
      display_task();
      return;
    }
  }
}

// it makes the UI more better and allows the user to go back
function cancel_update() {
  edit = false;
  input.value = "";
  display_task();
  return;
}

function edit_task(id) {
  edit_btn.innerHTML = `<button id="update_task" onclick="update_task()">Update</button>`;
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      value = tasks[i].text;
      input.value = tasks[i].text;
      edit = true;
      edit_btn.innerHTML = `<button id="update_task" onclick="update_task(${id})">Update</button>
      <button id="cancel_task" onclick="cancel_update()">Cancel</button>`;
      // display_task();
      return;
    }
  }
}

function delete_all() {
  tasks = [];
  window.localStorage.removeItem("tasks");
  display_task();
  // show.innerHTML = "";
  // console.log(tasks);
}
