import Sprite from './Sprite.js';

export default class Brick extends Sprite {
  constructor (brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft, ctx, color) {
    let x = 0;
    let y = 0;
    super(x, y, brickWidth, brickHeight, color)
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.brickPadding = brickPadding;
    this.brickOffsetTop = brickOffsetTop;
    this.brickOffsetLeft = brickOffsetLeft;
    this.ctx = ctx;
    this.status = 1;
    //this.color = '';

  }

  drawBrick(color) {
    ctx.beginPath();
    ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
    ctx.fillStyle = color;

  }
  
  
}
