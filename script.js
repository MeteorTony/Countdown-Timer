const bday = "2021/10/28";
var isCounting = true;

function resetDate(){
    clearInterval(counting);
    isCounting = false;
    chooseDate(); 
    countdown(new Date());
}

//set a custom countdown
document.getElementById("set").onclick = function(){
    if(isCounting){                     // update if click "set" button more than once consecutively
        clearInterval(counting);
        isCounting = false;
    }
    var dateInput = document.getElementById("date-input").value;
    document.getElementById("date").innerHTML = `Date: <span>${bday}</span> <button id="reset" onclick="resetDate()" > Reset </button>`;
    counting = setInterval(()=>{countdown(dateInput)}, 1000);
    isCounting = true;
}

// control countdown
function countdown(date){
    // console.log(`date: ${date}`)
    const wantedDate = new Date(date);
    const currentDate = new Date();

    const diffSec = (wantedDate - currentDate) / 1000;    //1s = 1000ms
    const secs = Math.floor(diffSec) % 60;
    const mins = Math.floor(diffSec / 60) % 60;
    const hours = Math.floor(diffSec / 60 / 60) % 24;
    const days = Math.floor(diffSec / 60 / 60 / 24);    

    document.getElementById("secs").innerHTML = format(secs);
    document.getElementById("mins").innerHTML = format(mins);
    document.getElementById("hours").innerHTML = format(hours);
    document.getElementById("days").innerHTML = days;

}

//show date picker for choosing date
function chooseDate(){
    var selected = document.querySelectorAll(".date-update");
    for(let i = 0; i < selected.length; ++i){
        selected[i].style.display = "";
    }
}

//countdown display format
const format = (time) => (time < 10 ? `0${time}` : time)


// need to attach onclick event to <button>: else reassigning to innerHTML will remove event appended from JS
document.getElementById("date").innerHTML += `Date: My Birthday - <span>${bday}</span> (default) <button id="reset" onclick="resetDate()" > Reset </button>`;

countdown(bday);    //initial call

var counting = setInterval(()=>{countdown(bday)}, 1000);    //initial continuous countdown