"use strict";

var hour = document.querySelector("#hour");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var days = document.querySelector("#days"); // setInterval(() => {
// }, 1000);

var setDate = function setDate() {
  var date = new Date();
  hour.textContent = date.getHours();
  minutes.textContent = date.getMinutes();
  seconds.textContent = date.getSeconds();
  days.textContent = date.getDay();

  if (days.textContent == 1) {
    days.textContent = "MON";
  } else if (days.textContent == 2) {
    days.textContent = "TUE";
  } else if (days.textContent == 3) {
    days.textContent = "WED";
  } else if (days.textContent == 4) {
    days.textContent = "THU";
  } else if (days.textContent == 5) {
    days.textContent = "FRI";
  } else if (days.textContent == 6) {
    days.textContent = "SAT";
  } else {
    days.textContent = "SUN";
  }
};

setInterval(setDate, 1000);
setDate();
