class Animator {
  constructor(
    spritesheet,
    xStart,
    yStart,
    width,
    height,
    frameCount,
    frameDuration
  ) {
    Object.assign(this, {
      spritesheet,
      xStart,
      yStart,
      width,
      height,
      frameCount,
      frameDuration,
    });

    this.elapsedTime = 0;
    this.totalTime = this.frameCount * this.frameDuration;
  }

  drawFrame(tick, ctx, x, y, scale) {
    this.elapsedTime += tick;
    if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
    let frame = this.currentFrame();

    ctx.drawImage(
      this.spritesheet,
      this.xStart,
      this.yStart + frame * this.height,
      this.width,
      this.height,
      x,
      y,
      this.width * scale,
      this.height * scale
    );
  }

  currentFrame() {
    return Math.floor(this.elapsedTime / this.frameDuration);
  }

  isDone() {
    return this.elapsedTime >= this.totalTime;
  }
}
