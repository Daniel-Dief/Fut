function posse(jogador, bola) {
    let jInix, jBordax, bInix, bBordax, jIniy, jBorday, bIniy, bBorday;
    jInix = jogador.x;
    jBordax = jogador.x + jogador.width;
    bInix = bola.x;
    bBordax = bola.x + bola.width;
    jIniy = jogador.y;
    jBorday = jogador.y + jogador.height;
    bIniy = bola.y;
    bBorday = bola.y + bola.height;

    if ((bInix >= jInix && bInix <= jBordax) || (bBordax >= jInix && bBordax <= jBordax)) {
        if ((bIniy >= jIniy && bIniy <= jBorday) || (bBorday >= jIniy && bBorday <= jBorday)) {
            team = jogador.team;
            return true;
        }
    }

    return false;
}

function pontoP1(bola) {
    let bBordax, bIniy, bBorday;
    bBordax = bola.x + bola.width;
    bIniy = bola.y;
    bBorday = bola.y + bola.height;

    if (bBordax >= 1135 && bIniy >= 255 && bBorday <= 360) {
        pause = true;
        setTimeout(() => {
            positionDefault();
        }, 1000);
    }
}

function pontoP2(bola) {
    let bInix, bIniy, bBorday;
    bInix = bola.x;
    bIniy = bola.y;
    bBorday = bola.y + bola.height;

    if (bInix <= 70 && bIniy >= 260 && bBorday <= 360) {
        pause = true;
        setTimeout(() => {
            positionDefault();
        }, 1000);
    }
}

function fora(bola) {
    let inix, bordax, iniy, borday;
    inix = bola.x;
    iniy = bola.y;
    bordax = bola.x + bola.width;
    borday = bola.y + bola.height;

    if (borday < 40) {
        bola.y = 40;
        if (team == 'orange') {
            player1.x = bola.x;
            player1.y = bola.y - 10;
        } else if (team == 'purple') {
            player2.x = bola.x;
            player2.y = bola.y - 10;
        }
    } else if (iniy > 560) {
        bola.y = 560;
        if (team == 'orange') {
            player1.x = bola.x;
            player1.y = bola.y + 10;
        } else if (team == 'purple') {
            player2.x = bola.x;
            player2.y = bola.y + 10;
        }
    } else if (bordax < 80) {
        setTimeout(() => {
            if (team == 'orange') {
                if(bola.y > 300) {
                    bola.x = 90;
                    bola.y = 50;
                } else {
                    bola.x = 90;
                    bola.y = 550;
                }
                player2.x = bola.x + 30;
                player2.y = bola.y;
            } else if (team == 'purple') {
                bola.x = 200;
                bola.y = 300;
            }
        }, 200);
    } else if (inix > 1130) {
        setTimeout(() => {
            if (team == 'purple') {
                if(bola.y > 300) {
                    bola.x = 1110;
                    bola.y = 50;
                } else {
                    bola.x = 1110;
                    bola.y = 550;
                }
                player1.x = bola.x - 30;
                player1.y = bola.y;
            } else if (team == 'orange') {
                bola.x = 1000;
                bola.y = 300;
            }
        }, 200);
    }
}