class Witch {
  constructor(game) {
    Object.assign(this, { game });
    this.idle = ASSET_MANAGER.getAsset("./sprites/B_witch_idle.png");
    this.running = ASSET_MANAGER.getAsset("./sprites/B_witch_run.png");
    this.charge = ASSET_MANAGER.getAsset("./sprites/B_witch_charge.png");
    this.attack = ASSET_MANAGER.getAsset("./sprites/B_witch_attack.png");
    this.damaged = ASSET_MANAGER.getAsset("./sprites/B_witch_take_damage.png");
    this.dead = ASSET_MANAGER.getAsset("./sprites/B_witch_dead.png");
    this.animations = [];
    this.loadAnimations();
  }

  loadAnimations() {
    //idle
    this.animations.push(new Animator(this.idle, 0, 0, 32, 48, 6, 0.2));

    //run
    this.animations.push(new Animator(this.running, 0, 0, 32, 48, 8, 0.2));

    //charge
    this.animations.push(new Animator(this.charge, 0, 0, 48, 48, 5, 0.2));

    //attack
    this.animations.push(new Animator(this.attack, 0, 0, 104, 46, 9, 0.2));

    //take damage
    this.animations.push(new Animator(this.damaged, 0, 0, 32, 48, 3, 0.2));

    //die
    this.animations.push(new Animator(this.dead, 0, 0, 40, 48, 12, 0.2));
  }

  update() {}

  draw(ctx) {
    //idle
    this.animations[0].drawFrame(this.game.clockTick, ctx, 25, 25 + 50, 2);

    //run
    this.animations[1].drawFrame(this.game.clockTick, ctx, 25, 175 + 50, 2);

    //charge
    this.animations[2].drawFrame(this.game.clockTick, ctx, 10, 325 + 50, 2);

    //attack
    this.animations[3].drawFrame(this.game.clockTick, ctx, 20, 475 + 50, 2);

    //take damage
    this.animations[4].drawFrame(this.game.clockTick, ctx, 23, 600 + 50, 2);

    //die
    this.animations[5].drawFrame(this.game.clockTick, ctx, 0, 750 + 50, 2);
  }
}
