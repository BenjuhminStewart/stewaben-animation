const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/blobidle.png");
ASSET_MANAGER.queueDownload("./sprites/blobmove.png");
ASSET_MANAGER.queueDownload("./sprites/blobattack.png");
ASSET_MANAGER.queueDownload("./sprites/blobdeath.png");

ASSET_MANAGER.downloadAll(() => {
  const canvas = document.getElementById("gameWorld");
  const ctx = canvas.getContext("2d");

  gameEngine.addEntity(new Blob());

  gameEngine.init(ctx);

  gameEngine.start();
});
