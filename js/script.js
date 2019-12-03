var noon= 12;
var evening = 18;
var wakeup = 6;
var lunchtime= 12;
var naptime = 14;
var party  = 17;

var oneSecond= 10000;

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var partyTimeButton1 = document.getElementById("partyTime");

//

var wakeUpEvent = function()
{
	//change the selected value for the wakeUpTimeSelector id wakeup= wakeUpTimeSelector.value;

};
//
var lunchTimeEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};
//
var napTimeEvent = function()
{
    naptime = napTimeSelector.value;
};
//

var partyEvent = function()
{
	if (partytime < 0)
	{
		partytime = new Date().getHours(0);
		partyTimeButton1.innerText = "Party Over";
		partyTimeButton1.style.background = "#0A8DAB";
	}
	else
	{
		partytime = -1;
		partyTimeButton1.innerText = "PARTY TIME!";
		partyTimeButton1.style.background = "#222";
	}
};


var showCurrentTime = function()
{
	//display the string on the webpage
	var clock = document.getElementById('clock');
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	//Set hours
	if (hours >= noon)
	{
		meridian = "PM";
	}
	if (hours > noon)
	{
		hours = hours - 12;
	}

	// Set Minutes
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}

	// Set Seconds
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}

	// put together the string that displays the time
	var clockTime = hours + ':' + minutes +':' + seconds + " " + meridian + "!";

	clock.innerText = clockTime;
};

var updateClock = function()
{
	var messageText;
	var partydogImage = document.getElementById("partydog");
	var image = "hotel.jpg"

	var time = new Date().getHours()
	var timeEventJS = document.getElementById("timeEvent");

	if (time < noon)
	{
		messageText = "Beautiful Morning";
		image = "girl.jpg"
	}
	else if (time >= evening)
	{
		messageText = "Good evening, mates!";
		image = "http://www.imagesbuddy.com/images/116/2013/12/good-evening-black-cat-graphic.jpg";
	}
	else
	{
		messageText = "Good afternoon, mate";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	}

	if (time == wakeup) {
		messageText = "Time to wake up, sleepyhead";
	}
	else if (time == lunchtime) {
		messageText = "Time for a powernap!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    } 
    else if (time == partytime){
      messageText = "Hang up your hard hat! It's time to P A R T Y";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    };

    lolcatImage.src=image;
    timeEventJS.innerText = messageText;

    showCurrentTime();
};

updateClock();
setInterval( updateClock, oneSecond);

partyTimeButton1.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);
	
  
