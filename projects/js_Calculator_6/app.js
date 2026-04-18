var flag = false;
var opr_flag = false;
var reset_flag = false;
var count = 0;

var screen = document.getElementById("screen");

function mode(data) {
  if (data == "ON") {
    flag = true;
    count = 0;
    screen.innerText = "ON";
    setTimeout(() => {
      screen.innerText = "";
    }, 200);

    return;
  }
  if (data == "OFF") {
    flag = false;
    count = 0;
    screen.innerText = "OFF";
    setTimeout(() => {
      screen.innerText = "";
    }, 500);
    return;
  }
}

// for clearing screen
function input(data) {
  if (flag == false) return;
  if (data == "Percent") {
    var va = Number(screen.innerText);
    va /= 100;
    screen.innerText = va;
    return;
  }
  if (data == "CE") {
    var display = screen.innerText.length;
    screen.innerText = screen.innerText.slice(0, display - 1);

    var operators = ["+", "-", "*", "/", "%"];

    if (operators.includes(screen.innerText.slice(-1))) {
      opr_flag = false;
    } else {
      opr_flag = true;
    }
    return;
  }
}

// for numbers
function num(data) {
  if (flag == false) return;
  opr_flag = true;
  reset_flag = true;
  screen.innerText += data;
}

// for operators
function opr(data) {
  if (flag == false || opr_flag == false) return;
  else opr_flag = false;

  reset_flag = true;
  screen.innerText += data;
}

// for results
function result() {
  if (flag == false || screen.innerText.length <= 0) return;
  var res = document.getElementById("screen").innerText;
  res = eval(res);
  screen.innerText = res;
  count++;
  if (count >= 3 && reset_flag == false) {
    screen.innerText = "";
    count = 0;
  }
  reset_flag = false;
}
