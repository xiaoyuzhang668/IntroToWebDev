let ballImage;
let timerId;

function startMoving() {        
   ballImage = document.getElementById("ball");
   timerId = setInterval(moveBall, 10);
}

function moveBall() {
   let left = parseInt(ballImage.style.left);
   ballImage.style.left = left + 5 + "px";   
}

<img src="ball.png" id="ball" alt="ball" 
   style="position:absolute; left:0">

