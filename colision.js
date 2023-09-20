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
    if (bola.x <= 80 && bola.y >= 260 && bola.y <= 360) {
        pause = true;
        positionDefault();
        placar1.innerHTML = parseInt(placar1.innerHTML) + 1;
    }
}

function pontoP2(bola) {
    if (bola.x >= 1120 && bola.y >= 260 && bola.y <= 360) {
        pause = true;
        positionDefault();
        placar2.innerHTML = parseInt(placar2.innerHTML) + 1;
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
                if (bola.y > 300) {
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
                if (bola.y > 300) {
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

function teamPosse(jTeam, bola) {
    let jInix, jBordax, bInix, bBordax, jIniy, jBorday, bIniy, bBorday;
    jInix = jTeam.x;
    jBordax = jTeam.x + jTeam.width;
    bInix = bola.x;
    bBordax = bola.x + bola.width;
    jIniy = jTeam.y;
    jBorday = jTeam.y + jTeam.height;
    bIniy = bola.y;
    bBorday = bola.y + bola.height;

    if ((bInix >= jInix && bInix <= jBordax) || (bBordax >= jInix && bBordax <= jBordax)) {
        if ((bIniy >= jIniy && bIniy <= jBorday) || (bBorday >= jIniy && bBorday <= jBorday)) {
            team = jTeam.team;
            jTeam.posse = true;
            switch (jTeam.direction) {
                case 'Up':
                    bola.x = jTeam.x;
                    bola.y = jTeam.y - 10;
                    break;
                case 'Down':
                    bola.x = jTeam.x;
                    bola.y = jTeam.y + 10;
                    break;
                case 'Left':
                    bola.x = jTeam.x - 10;
                    bola.y = jTeam.y;
                    break;
                case 'Right':
                    bola.x = jTeam.x + 10;
                    bola.y = jTeam.y;
                    break;

                default:
                    break;
            }
        } else {
            jTeam.posse = false;
        }
    } else {
        jTeam.posse = false;
    }
}