var tasks = [];
var show = document.getElementById("task_Display"); // display
var input = document.getElementById("assign_task"); // get input text value
var edit = document.getElementById("btn_container"); // for edit purpose

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
    edit: false,
  };

  tasks.push(obj);
  // idx++;
  assign_task.value = "";
  display_task();
  console.log(tasks);
}

function display_task() {
  show.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var get_name = tasks[i]; // to get obj

    if (get_name.done == false && get_name.edit == false) {
      show.innerHTML += `<div class = "display_item" > 
      <span> ${get_name.text}</span>
      <button id = " delete " onclick="delete_task(${get_name.id})"> Delete </button> 
      <button id = " edit " onclick="edit_task(${get_name.id})"> Edit </button> 
      <button id = " done " onclick="done_task(${get_name.id})"> Done </button> 
      </div>`;
    } else {
      show.innerHTML += `<div class = "display_item" > 
      <span> ${get_name.text}</span>
      <button id = " delete " disabled onclick="delete_task(${get_name.id})"> Delete </button> 
      <button id = " edit " onclick="edit_task(${get_name.id})"> Edit </button> 
      <button id = " done " disabled onclick="done_task(${get_name.id})"> Done </button> 
      </div>`;
    }
  }
}

function delete_task(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (id == tasks[i].id) {
      tasks.splice(i, 1);
    }
  }
  display_task();
}

function done_task(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (id == tasks[i].id) {
      tasks[i].done = true;
    }
  }
  display_task();
}

function update_task(id) {
  for (var i = 0; i < tasks.length; i++) {
    if ((tasks[i].id = id)) {
      tasks[i].text = input.value;
      display_task();
      return;sp
      // console.log(tasks);
    }
  }
}

function edit_task(id) {
  edit.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    if (id == tasks[i].id) {
      edit.innerHTML += `<button id="update_task" onclick="update_task(${tasks[i].id})">Update</button>`;
      tasks[i].edit = true;
      input.value = tasks[i].text;
      // update_task(id);
      break;
    }
  }
  // display_task();
}
