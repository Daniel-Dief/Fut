const placar1 = document.querySelector('.P1');
const placar2 = document.querySelector('.P2');
var pause = false;

function positionDefault() {
    ball.y = 300;
    ball.x = 600;

    player1.x = app.screen.width * 0.45;
    player1.y = app.screen.height / 2;

    player2.x = app.screen.width * 0.55;
    player2.y = app.screen.height / 2;

    teamOrange[0].position.set(300, 200);
    teamOrange[1].position.set(300, 400);
    teamOrange[2].position.set(450, 150);
    teamOrange[3].position.set(450, 300);
    teamOrange[4].position.set(450, 450);

    teamPurple[0].position.set(900, 200);
    teamPurple[1].position.set(900, 400);
    teamPurple[2].position.set(750, 150);
    teamPurple[3].position.set(750, 300);
    teamPurple[4].position.set(750, 450);

    setTimeout(() => {
        pause = false;
    }, 1000);
}