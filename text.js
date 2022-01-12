class TextOverlay {
  constructor(game) {
    Object.assign(this, { game });
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/stormhead.png");
  }

  update() {}

  draw(ctx) {
    ctx.shadowBlur = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "WHITE";
    ctx.font = "30px Arial";
    ctx.fillText("DEATH", 105 + 10, 815 + 50);

    ctx.fillText("IDLE", 105 + 10, 100 + 50);

    ctx.fillText("RUN", 105 + 10, 225 + 50);

    ctx.fillText("CHARGE", 105 + 10, 380 + 50);

    ctx.fillText("ATTACK", 105 + 10, 525 + 50);

    ctx.fillText("DAMAGED", 105 + 10, 655 + 50);

    ctx.shadowBlur = 0;
    for (let i = 65; i < 875 + 50; i++) {
      ctx.fillText("|", 310 + 50, i);
    }

    ctx.save();

    ctx.fillStyle = "WHITE";
    ctx.shadowBlur = 10;
    ctx.font = "50px Lucida";
    ctx.fillText("BENJAMIN STEWART - ANIMATION ASSIGNMENT", 545, 450);
    ctx.fillText("sprites from".toUpperCase(), 525, 550);
    ctx.fillStyle = "CYAN";
    ctx.fillText("https://9e0.itch.io/witches-pack".toUpperCase(), 890, 550);
    ctx.restore();
  }
}
