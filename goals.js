const trave1 = PIXI.Sprite.from('./imgs/trave1.png');
const trave2 = PIXI.Sprite.from('./imgs/trave2.png');

trave1.anchor.set(0.5);
trave1.x = app.screen.width * 0.03;
trave1.y = app.screen.height / 2;

trave2.anchor.set(0.5);
trave2.x = app.screen.width * 0.97;
trave2.y = app.screen.height / 2;

trave1.scale.x *= 0.2;
trave1.scale.y *= 0.2;

trave2.scale.x *= 0.2;
trave2.scale.y *= 0.2;

app.stage.addChild(trave1);
app.stage.addChild(trave2);