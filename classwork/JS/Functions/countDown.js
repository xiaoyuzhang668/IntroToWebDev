let countdowntimerId = null;  // stores unique identifier of interval timer
let number = document.getElementById("number");
let startbutton = document.getElementById("startbutton");
let stopbutton = document.getElementById("stopbutton");

function countdown() {
   let num = parseInt(number.value) - 1;
   if (num <= 0) {
      num = 0;
      startbutton.disabled = false;
      stopbutton.disabled = true;
      clearInterval(countdowntimerId);
      
   }
   number.value = num;
}

startbutton.addEventListener("click", function() {
   startbutton.disabled = true;
   stopbutton.disabled = false;
 countdowntimerId = setInterval(countdown, 1000);

});

stopbutton.addEventListener("click", function() {
   startbutton.disabled = false;
   stopbutton.disabled = true;
      clearInterval(countdowntimerId);   // stop countdown (countdowntimerId)

});
