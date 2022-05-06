window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var interval;

  // button clicks

    buttonStart.onclick = function() {
      clearinterval(interval);
       interval = setinterval(startTimer, 10);
    }

      buttonStop.onclick = function() {
         clearinterval(interval);
    }
    
    buttonReset.onclick = function() {
       clearinterval(interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
     
    // timer functions

    function startTimer () {
      tens++; 
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      if (tens > 9){
        appendTens.innerHTML = tens; 
      } 
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    }
  }