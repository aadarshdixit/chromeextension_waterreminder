



document.getElementById("add").addEventListener("click", ()=>{
    console.log("done");
    const minutes = parseInt(document.getElementById("timeenter").value);
    if(isNaN(minutes)){
       alert("pls enter the time ");
    }
    else {
        console.log(minutes);
        chrome.runtime.sendMessage({minutes:minutes}, function(response) {
          var audio = new Audio('mysound.wav');
          audio.play();
          console.log(response);
        });
    }
});

document.getElementById("stop").addEventListener("click", ()=>{
  console.log("stop");
  chrome.runtime.sendMessage({text:"stop"}, function(response) {
    var audio = new Audio('stop.mp3');
          audio.play();
          document.getElementById("timeenter").value = "";
    console.log(response);
  });
});