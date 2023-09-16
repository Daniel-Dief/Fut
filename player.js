const player1 = PIXI.Sprite.from('./imgs/p1.png');
const player2 = PIXI.Sprite.from('./imgs/p2.png');

player1.anchor.set(0.5);
player1.x = app.screen.width * 0.45;
player1.y = app.screen.height / 2;

player2.anchor.set(0.5);
player2.x = app.screen.width * 0.55;
player2.y = app.screen.height / 2;

player1.scale.x *= 0.5;
player1.scale.y *= 0.5;

player2.scale.x *= 0.5;
player2.scale.y *= 0.5;

app.stage.addChild(player1);
app.stage.addChild(player2);