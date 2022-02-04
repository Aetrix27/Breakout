import Sprite from './Sprite.js';

export default class Paddle extends Sprite{
    constructor(paddleHeight, paddleWidth, paddleX, ctx, canvas, color){
        var y=0
        super(paddleX, y, paddleWidth, paddleHeight, color) // Calling super initializes the super class!
        this.ctx = ctx;
        this.canvas = canvas;
    }

    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.canvas.height-this.height, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
      }
}