const app = new PIXI.Application({ background: 0x00DD00, height: 600, width:1200 });

document.body.appendChild(app.view);

const goal1 = PIXI.Sprite.from('./imgs/goal1.png');
const goal2 = PIXI.Sprite.from('./imgs/goal2.png');

goal1.anchor.set(0.5);
goal1.x = app.screen.width * 0.03;
goal1.y = app.screen.height / 2;

goal2.anchor.set(0.5);
goal2.x = app.screen.width * 0.97;
goal2.y = app.screen.height / 2;

goal1.scale.x *= 0.2;
goal1.scale.y *= 0.2;

goal2.scale.x *= 0.2;
goal2.scale.y *= 0.2;

app.stage.addChild(goal1);
app.stage.addChild(goal2);