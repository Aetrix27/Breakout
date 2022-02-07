import Sprite from './Sprite.js';

export default class Brick extends Sprite {
  constructor (brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft, ctx, status
    ) {
    const x = 0;
    const y = 0;
    super(x, y, brickWidth, brickHeight)
    this.brickPadding = brickPadding;
    this.brickOffsetTop = brickOffsetTop;
    this.brickOffsetLeft = brickOffsetLeft;
    this.ctx = ctx;
    this.status = status;
  }

  drawBrick(x, y, color) {
    this.ctx.beginPath();
    this.ctx.rect(x, y, this.width, this.height);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.closePath();
  }
  
  
}
