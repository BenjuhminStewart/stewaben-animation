class Blob {
  constructor() {}

  update() {}

  draw(ctx) {
    ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/blobidle.png"), 0, 0);
  }
}
