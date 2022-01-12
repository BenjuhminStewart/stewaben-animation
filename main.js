const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/B_witch_attack.png");
ASSET_MANAGER.queueDownload("./sprites/B_witch_charge.png");
ASSET_MANAGER.queueDownload("./sprites/B_witch_dead.png");
ASSET_MANAGER.queueDownload("./sprites/B_witch_idle.png");
ASSET_MANAGER.queueDownload("./sprites/B_witch_run.png");
ASSET_MANAGER.queueDownload("./sprites/B_witch_take_damage.png");

ASSET_MANAGER.downloadAll(() => {
  const canvas = document.getElementById("gameWorld");
  const ctx = canvas.getContext("2d");

  ctx.imageSmoothingEnabled = false;

  gameEngine.addEntity(new Witch(gameEngine));
  gameEngine.addEntity(new TextOverlay(gameEngine));

  gameEngine.init(ctx);

  gameEngine.start();
});
