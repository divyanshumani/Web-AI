function date_time(){
var date_object = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[date_object.getDay()];
var monthName=months[date_object.getMonth()];
var date= date_object.getDate();
var year=date_object.getFullYear();
var temp_date=document.getElementById('day_date');
temp_date.innerHTML=dayName+", "+monthName+" "+date+", "+year;

var hours = date_object.getHours() > 12 ? date_object.getHours() - 12 : date_object.getHours();
var am_pm = date_object.getHours() >= 12 ? "PM" : "AM";
hours = hours < 10 ? "0" + hours : hours;
var minutes = date_object.getMinutes() < 10 ? "0" + date_object.getMinutes() : date_object.getMinutes();
time = hours + ":" + minutes + " " + am_pm;
var time_temp = document.getElementById("time");
time_temp.innerHTML = time;
setInterval(date_time, 60000);
}
date_time();
