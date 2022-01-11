const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/blob idle.png");
ASSET_MANAGER.queueDownload("./sprites/blob move.png");
ASSET_MANAGER.queueDownload("./sprites/blob attack.png");
ASSET_MANAGER.queueDownload("./sprites/blob death.png");

ASSET_MANAGER.downloadAll(() => {
  const canvas = document.getElementById("gameWorld");
  const ctx = canvas.getContext("2d");

  gameEngine.init(ctx);

  gameEngine.start();
});
