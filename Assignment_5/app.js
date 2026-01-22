// var obj = new Date();

var g_days = document.getElementById("day");
function show_day() {
  var obj = new Date();
  var days = [
    "Sunday ,",
    "Monday ,",
    "Tuesday ,",
    "Wednesday ,",
    "Thursday ,",
    "Friday ,",
    "Saturday ,",
  ];
  var num = obj.getDay();
  g_days.innerText = days[num];
}
show_day();

var g_month = document.getElementById("month");
function show_month() {
  var obj = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var num = obj.getMonth();
  g_month.innerText = months[num];
}
show_month();

var g_date = document.getElementById("date");
function show_date() {
  var obj = new Date();
  var num = obj.getDate();
  g_date.innerText = num + " ,";
}
show_date();

var g_year = document.getElementById("year");
function show_year() {
  var obj = new Date();
  var num = obj.getFullYear();
  g_year.innerText = num;
}
show_year();

var g_hour = document.getElementById("hour");
var g_division = document.getElementById("division");
function show_hour() {
  var objec = new Date();
  var num = objec.getHours();
  g_division.style.fontSize = "35px";
  if (num == 0 || num == 12) {
    g_hour.innerText = "12 :";
    if (num == 0) g_division.innerText = "AM";
    else g_division.innerText = "PM";
  } else if (num >= 1 && num < 10) {
    g_hour.innerText = "0" + num + " :";
    g_division.innerText = "AM";
  } else if (num == 10 || num == 11) {
    g_hour.innerText = num + " :";
    g_division.innerText = "AM";
  } else if (num > 12) {
    num -= 12;
    g_hour.innerText = "0" + num + " :";
    g_division.innerText = "PM";
  }
}
show_hour();

var g_mins = document.getElementById("min");
function show_min() {
  var objec = new Date();
  var num = objec.getMinutes();
  if (num < 10) {
    g_mins.innerText = "0" + num + " :";
  } else g_mins.innerText = num + " :";
}
show_min();

var g_secs = document.getElementById("sec");
function show_sec() {
  var objec = new Date();
  var num = objec.getSeconds();
  if (num < 10) {
    g_secs.innerText = "0" + num;
  } else g_secs.innerText = num;
}
setInterval(show_sec, 1000);
