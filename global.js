var pause = false;

function positionDefault() {
    ball.y = 300;
    ball.x = 600;

    player1.x = app.screen.width * 0.45;
    player1.y = app.screen.height / 2;

    player2.x = app.screen.width * 0.55;
    player2.y = app.screen.height / 2;

    pause = false;
}