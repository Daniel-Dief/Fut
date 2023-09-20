let keyPress = {};
let keyLast1;
let keyLast2;

window.addEventListener("keydown", (key) => {
    if (!pause) {
        keyPress[key.key] = true;
        if (key.key == "g" || key.key == "G") {
            chutarP1();
        }
        if (key.key == "l" || key.key == "L") {
            chutarP2();
        }
    }
})

window.addEventListener("keyup", (key) => {
    keyPress[key.key] = false;
})

function unKeyPress(player){
    if (player == 'P1') {
        if(keyPress.w){
            keyPress.w = false;
            setTimeout(() => {
                keyPress.w = true;
            }, 20);
        }
        if(keyPress.a){
            keyPress.a = false;
            setTimeout(() => {
                keyPress.a = true;
            }, 20);
        }
        if(keyPress.s){
            keyPress.s = false;
            setTimeout(() => {
                keyPress.s = true;
            }, 20);
        }
        if(keyPress.d){
            keyPress.d = false;
            setTimeout(() => {
                keyPress.d = true;
            }, 20);
        }
    } else if (player == 'P2') {
        if(keyPress.ArrowUp){
            keyPress.ArrowUp = false;
            setTimeout(() => {
                keyPress.ArrowUp = true;
            }, 20);
        }
        if(keyPress.ArrowDown){
            keyPress.ArrowDown = false;
            setTimeout(() => {
                keyPress.ArrowDown = true;
            }, 20);
        }
        if(keyPress.ArrowLeft){
            keyPress.ArrowLeft = false;
            setTimeout(() => {
                keyPress.ArrowLeft = true;
            }, 20);
        }
        if(keyPress.ArrowRight){
            keyPress.ArrowRight = false;
            setTimeout(() => {
                keyPress.ArrowRight = true;
            }, 20);
        }
    }
}

function move() {
    if (keyPress.w) {
        player1.y += -3;
    }
    if (keyPress.s) {
        player1.y += 3;
    }
    if (keyPress.a) {
        player1.x += -3;
    }
    if (keyPress.d) {
        player1.x += 3;
    }
    if (keyPress.ArrowUp) {
        player2.y += -3;
    }
    if (keyPress.ArrowDown) {
        player2.y += 3;
    }
    if (keyPress.ArrowLeft) {
        player2.x += -3;
    }
    if (keyPress.ArrowRight) {
        player2.x += 3;
    }
    if (posse(player1, ball)) {
        conduzirP1();
    }
    if (posse(player2, ball)) {
        conduzirP2();
    }
    moveTeam();
}

function conduzirP1() {
    if (keyPress.w) {
        ball.y = player1.y - 5;
        ball.x = player1.x;
        keyLast1 = 'up';
    } else if (keyPress.s) {
        ball.y = player1.y + 5;
        ball.x = player1.x;
        keyLast1 = 'down';
    } else if (keyPress.a) {
        ball.x = player1.x - 5;
        ball.y = player1.y;
        keyLast1 = 'left';
    } else if (keyPress.d) {
        ball.x = player1.x + 5;
        ball.y = player1.y;
        keyLast1 = 'right';
    }
}

function conduzirP2() {
    if (keyPress.ArrowUp) {
        ball.y = player2.y - 5;
        ball.x = player2.x;
        keyLast2 = 'up';
    } else if (keyPress.ArrowDown) {
        ball.y = player2.y + 5;
        ball.x = player2.x;
        keyLast2 = 'down';
    } else if (keyPress.ArrowLeft) {
        ball.x = player2.x - 5;
        ball.y = player2.y;
        keyLast2 = 'left';
    } else if (keyPress.ArrowRight) {
        ball.x = player2.x + 5;
        ball.y = player2.y;
        keyLast2 = 'right';
    }
}

function chutarP1() {
    if (posse(player1, ball)) {
        if (keyPress.w && keyPress.d) {
            rolar('up-right');
        } else if (keyPress.d && keyPress.s) {
            rolar('down-right');
        } else if (keyPress.s && keyPress.a) {
            rolar('down-left');
        } else if (keyPress.a && keyPress.w) {
            rolar('up-left');
        } else if (keyPress.w) {
            rolar('up');
        } else if (keyPress.s) {
            rolar('down');
        } else if (keyPress.a) {
            rolar('left');
        } else if (keyPress.d) {
            rolar('right');
        } else {
            rolar(keyLast1)
        }
    }
    unKeyPress('P1');
}

function chutarP2() {
    if (posse(player2, ball)) {
        if (keyPress.ArrowUp && keyPress.ArrowRight) {
            rolar('up-right');
        } else if (keyPress.ArrowRight && keyPress.ArrowDown) {
            rolar('down-right');
        } else if (keyPress.ArrowDown && keyPress.ArrowLeft) {
            rolar('down-left');
        } else if (keyPress.ArrowLeft && keyPress.ArrowUp) {
            rolar('up-left');
        } else if (keyPress.ArrowUp) {
            rolar('up');
        } else if (keyPress.ArrowDown) {
            rolar('down');
        } else if (keyPress.ArrowLeft) {
            rolar('left');
        } else if (keyPress.ArrowRight) {
            rolar('right');
        } else {
            rolar(keyLast2)
        }
    }
    unKeyPress('P2');
}

setInterval(() => {
    pontoP1(ball);
    pontoP2(ball);
    fora(ball);
}, 500);

setTimeout(() => {
    app.ticker.add(() => move());
}, 200);
