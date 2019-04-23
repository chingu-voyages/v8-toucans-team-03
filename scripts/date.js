var currentTime = document.getElementById("clock_container");

function timeCheck(n) {
  return (parseInt(n,10) < 10 ? '0' : '')+n;
}

function updateTime(){
  var timeNow= new Date(),
  hh = timeNow.getHours(),
  mm = timeNow.getMinutes(),
  ss = timeNow.getSeconds(),
  formatAMPM = (hh >= 12?'PM':'AM');
  hh = hh % 12 || 12;
  currentTime.innerHTML = hh + "<span>:</span>" + timeCheck(mm) + "<span>:</span>" + timeCheck(ss) + " " + formatAMPM;
  setTimeout(updateTime,1000);
}
updateTime();

var currentDate = document.getElementById("date_container");
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

function updateDate () {
  var date = new Date(),
  monthName= month[date.getMonth()],
  day = date.getDate(),
  year = date.getFullYear();
  currentDate.innerHTML = monthName + ' ' + day + ', ' + year;
  setTimeout(updateDate,10000);
}

updateDate();
