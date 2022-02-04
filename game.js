import Ball from './Ball.js';
import Brick from './Brick.js';
import Paddle from './Paddle.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = Math.random() * 10;
let dy = -Math.random() * 10;
const paddleWidth = 75;
const paddleHeight = 20;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
const brickRowCount = 5;
const brickColumnCount = 3;
let score = 0;
let lives = 3;
const brickWidth = 50;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
let bricks = []

var brick = new Brick(brickRowCount, brickColumnCount, brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft, ctx);
var paddle = new Paddle(paddleHeight, paddleWidth, paddleX, ctx, canvas, '#00FF5D');
var ball = new Ball(ballRadius, x, y, dx, dy, ctx, '#0095DD');

for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    bricks[c][r] = new Brick(brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft);
    //brick.bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

function keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = true;
    }
    else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = true;
    }
}

function drawBricks() {
  let c = 0;
  let r = 0;
  let innerCounter = 0;
  let color = '';

  for (c = 0; c < brickColumnCount; c += 1) {
    for (r = 0; r < brickRowCount; r += 1) {
      if (bricks[c][r].status == 1) {
        var brickX = (r * (bricks[c][r].brickWidth + bricks[c][r].brickPadding)) + bricks[c][r].brickOffsetLeft;
        var brickY = (c * (bricks[c][r].brickHeight + bricks[c][r].brickPadding)) + bricks[c][r].brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, bricks[c][r].brickWidth, bricks[c][r].brickHeight);

        if (innerCounter % 2 === 0) {
          color = 'purple';
          //bricks[c][r].drawBrick(color)
          ctx.fillStyle = color;
        } else {
          if (r === 0) {
            color = '#FFB200';
            ctx.fillStyle = color;
          }
          else if (r === 1) {
            color = '#FF0000';
            ctx.fillStyle = color;
          }
          else if (r === 2) {
            color = '#0055FF';
            ctx.fillStyle = color;
          }
          else if (r === 3) {
            color = '#D100FF';
            ctx.fillStyle = color;
          }
          else if (r === 4) {
            color = '#00FF3A';
            ctx.fillStyle = color;
          }

          bricks[c][r].color = color;

        }
        ctx.fill();
        ctx.closePath();
      }

      innerCounter += 1;
    }
  }

}

function keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = false;
    }
    else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.paddleX = relativeX - paddle.paddleWidth / 2;
  }
}
function collisionDetection() {
  let c = 0;
  let r = 0;
  for (c = 0; c < brick.brickColumnCount; c += 1) {
    for (r = 0; r < brick.brickRowCount; r += 1) {
      var b = bricks[c][r];
      if (bricks[c][r].status === 1) {
        if (ball.x > bricks[c][r].x && ball.x < bricks[c][r].x + brick.brickWidth && ball.y > bricks[c][r].y && ball.y < bricks[c][r].y + brickHeight) {
          ball.dy = -ball.dy;
          bricks[c][r].status = 0;
          score++;
          if (score === brick.brickRowCount * brick.brickColumnCount) {
            alert('YOU WIN, CONGRATS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('Score: ' + score, 8, 20);
}
function drawLives() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('Lives: ' + lives, canvas.width - 65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //Init brick array  
  //brick.drawBricks(bricks, brickRowCount, brickColumnCount);
  drawBricks()
  ball.drawBall();
  paddle.drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if (ball.x + ball.dx > canvas.width-ball.ballRadius || ball.x + ball.dx < ball.ballRadius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ball.ballRadius) {
    ball.dy = -ball.dy;
  }
  else if (ball.y + ball.dy > canvas.height-ball.ballRadius) {
    if (ball.x > paddle.paddleX && ball.x < paddle.paddleX + paddle.paddleWidth) {
      ball.dy = -ball.dy;
    } else {
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height-30;
        ball.dx = 3;
        ball.dy = -3;
        paddle.paddleX = (canvas.width-paddle.paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddle.paddleX < canvas.width - paddle.paddleWidth) {
    paddle.paddleX += 7;
  }
  else if (leftPressed && paddle.paddleX > 0) {
    paddle.paddleX -= 7;
  }

  ball.x += ball.dx;
  ball.y += ball.dy;
  requestAnimationFrame(draw);
}

draw();