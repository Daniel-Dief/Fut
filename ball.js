const ball = PIXI.Sprite.from('./imgs/ball.png');

ball.anchor.set(0.5);
ball.y = 300;
ball.x = 600;

ball.scale.x *= 0.05; 
ball.scale.y *= 0.05; 

app.stage.addChild(ball);