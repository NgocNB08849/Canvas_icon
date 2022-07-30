let c = document.getElementById("my_canvas");
let pen = c.getContext("2d");
const WIDTH = pen.width;
const HEIGHT = pen.height;

function draw(height,width){
    pen.beginPath();
    pen.arc(400,300, 250, 0, 2 * Math.PI);
    pen.fillStyle = "yellow";
    pen.fill();
    pen.stroke();
    
    pen.beginPath();
    pen.arc(400, 400, 50, 0, 1 * Math.PI);
    pen.stroke();
    
    pen.font = "60px Arial";
    pen.fillStyle="black";
    pen.fillText(">",285, 225, 90);

    pen.fillStyle="black";
    pen.font = "60px Arial";
    pen.fillText("^",485, 235);
  
    pen.font = "40px Arial";
    pen.fillText(".", height,width);

    pen.font = "50px Arial";
    pen.fillText("|  |", 373, 435);

    pen.font = "40px Arial";
    pen.fillText("____", 355, 417);
    
    pen.font = "45px Arial";
    pen.fillText("____", 350, 393);
    // pen.fillStyle();
    // pen.fill();
}
let toaDo = [520, 505, 483, 465, 458, 460, 465, 478, 494, 510, 525, 530]//sang
let toaDox = [230, 240, 238, 225, 210, 195, 185, 175, 173, 177, 190, 210]//xuong
let i = 0;
const FPS = 50;
let startFrameTime = Date.now();

function gameLoop() {
  pen.clearRect(0, 0, WIDTH, HEIGHT);
  let currentFrameTime = Date.now();
  let deltaTime = currentFrameTime - startFrameTime;

  let actualFPS = 1000 / deltaTime;

//   pen.textStyle = "10px Arial";
//   pen.fillText("FPS: " + actualFPS.toFixed(2), 10, 30);
  // draw a ball
  pen.fillStyle = "red";
  pen.beginPath();
  pen.fill();
  pen.closePath();

  if(!toaDo[i]){
    i = 0;
  }
  draw(toaDo[i], toaDox[i]);
  i++;

  startFrameTime = currentFrameTime;
}

setInterval(gameLoop, 1000 / FPS);


