const seg = document.querySelector('.timer .seg');
const min = document.querySelector('.timer .min');
const placar1 = document.querySelector('.P1');
const placar2 = document.querySelector('.P2');
var contTimer = 0;
var pause = true;
var confShutdown = false;

function positionDefault() {
    pause = true;
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

setInterval(() => {
    if(contTimer == 180){
        shutdown();
    }
    if(parseInt(seg.innerHTML) > 0){
        seg.innerHTML = parseInt(seg.innerHTML) - 1;
    } else if(parseInt(min.innerHTML) > 0){
        seg.innerHTML = 59;
        min.innerHTML = parseInt(min.innerHTML) - 1;
    }
    contTimer++;
}, 1000);

function shutdown(){
    confShutdown = true;
}