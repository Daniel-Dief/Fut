const ball = PIXI.Sprite.from('./imgs/ball.png');

ball.anchor.set(0.5);
ball.y = 300;
ball.x = 600;

ball.scale.x *= 0.05;
ball.scale.y *= 0.05;

app.stage.addChild(ball);

function rolar(direction) {
    for (let i=0;i<15;i++) {
        setTimeout(() => {
            if (direction == 'up') {
                ball.y -= 10;
            } else if (direction == 'down') {
                ball.y += 10;
            } else if (direction == 'left') {
                ball.x -= 10;
            } else if (direction == 'right') {
                ball.x += 10;
            } else if (direction == 'up-left') {
                ball.y -= 10;
                ball.x -= 10;
            } else if (direction == 'up-right') {
                ball.y -= 10;
                ball.x += 10;
            } else if (direction == 'down-left') {
                ball.y += 10;
                ball.x -= 10;
            } else if (direction == 'down-right') {
                ball.y += 10;
                ball.x += 10;
            }
        }, 15*i);
    }
}