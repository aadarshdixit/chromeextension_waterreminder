console.log("i am background");
let defaultDuration = 1;

chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log("Got an alarm!", alarm);
  chrome.notifications.create("my notification", {
    type: "basic",
    iconUrl: "logo.png",
    title: "Drink Water",
    message: "Water is very important for life "
  }, function () {
      console.log("audio played");
  })

  setTimeout(function(){chrome.notifications.clear("my notification",function(){});},10000);
});

function createAlarm() {
  chrome.alarms.create("drink water", { periodInMinutes: defaultDuration , delayInMinutes:0});
  
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.text === "stop") {
      console.log("stop the alarm");
      chrome.alarms.clear("drink water");
    }
    else{
      console.log("recieved the message");
      defaultDuration = request.minutes *1.0;
      createAlarm();
    }
     sendResponse({ success: true });
  }
);