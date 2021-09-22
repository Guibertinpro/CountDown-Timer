const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth(); 
const tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 8, 23, 12, 41, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 10, 30, 00);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = months[futureDate.getMonth()];
let weekDay = weekdays[futureDate.getDay()];
let day = futureDate.getUTCDate();

giveaway.textContent = `giveway ends on ${weekDay}, ${day} ${month} ${year} ${hours}:${minutes}pm`;

// future time in ms

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
 const today = new Date().getTime();
//  console.log(today);
 const t = futureTime - today;
// console.log(t);

 // 1s = 1000 ms
 // 1min = 60s = 60000 ms
 // 1hour = 60m = 3600000 ms
 // 1 day = 24h = 86400000 ms

 const oneDay = 24 * 60 * 60 * 1000;
//  console.log(oneDay);
 const oneHour = 60 * 60 * 1000;
 const oneMin = 60 * 1000;
 const oneSec = 1000;

const restDays = Math.floor(t/oneDay);
console.log(restDays);
const restHours = Math.floor((t%oneDay)/oneHour);
console.log(restHours);
const restMinutes = Math.floor((t%oneHour)/oneMin);
console.log(restMinutes);
const restSeconds = Math.floor((t%oneMin)/oneSec);
console.log(restSeconds);

// set values array
const values = [restDays, restHours, restMinutes, restSeconds];

function format(item) {
  if(item < 10) {
    return item = `0${item}`;
  }
  return item;
}

items.forEach(function(item, index) {
  item.innerHTML = format(values[index]);
})

if(t < 0) {
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
}

};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();