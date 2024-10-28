let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let des = document.getElementById("des")


setInterval(function(){
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    let[Hour, minute,second] =currentTime.split(':')
    let[secs, desc] = second.split(' ')
    
    hrs.innerHTML = Hour;
    min.innerHTML = minute;
    sec.innerHTML = secs;
    des.innerHTML = desc;
},1000)
