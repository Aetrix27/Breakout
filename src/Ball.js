import Sprite from './Sprite.js';

export default class Ball extends Sprite {
    constructor (ballRadius, x, y, dx, dy, ctx, color) {
        super(x, y, ballRadius * 2, ballRadius * 2, color) // Calling super initializes the super class!
        this.bricks = []
        this.ballRadius = ballRadius;
        this.dx = dx;
        this.dy = dy; 
        this.ctx = ctx;
    }
    
    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
      }
      
  }