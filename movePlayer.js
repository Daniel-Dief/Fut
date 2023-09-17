keyPress = {};

window.addEventListener("keydown", (key) => {
    keyPress[key.key] = true;
})

window.addEventListener("keyup", (key) => {
    keyPress[key.key] = false;
})

function move(){
    if(keyPress.w){
        player1.y += -3;
    }
    if(keyPress.s){
        player1.y += 3;
    }
    if(keyPress.a){
        player1.x += -3;
    }
    if(keyPress.d){
        player1.x += 3;
    }
    if(keyPress.ArrowUp){
        player2.y += -3;
    }
    if(keyPress.ArrowDown){
        player2.y += 3;
    }
    if(keyPress.ArrowLeft){
        player2.x += -3;
    }
    if(keyPress.ArrowRight){
        player2.x += 3;
    }
    if(posse(player1, ball)){
        conduzirP1();
    }
    if(posse(player2, ball)){
        conduzirP2();
    }
}

function conduzirP1(){
    if(keyPress.w){
       ball.y = player1.y - 10;
       ball.x = player1.x;
    } else if(keyPress.s){
       ball.y = player1.y + 10;
       ball.x = player1.x;
    } else if(keyPress.a){
       ball.x = player1.x - 10;
       ball.y = player1.y;
    } else if(keyPress.d){
       ball.x = player1.x + 10;
       ball.y = player1.y;
    }
}

function conduzirP2(){
    if(keyPress.ArrowUp){
       ball.y = player2.y - 10;
       ball.x = player2.x;
    } else if(keyPress.ArrowDown){
       ball.y = player2.y + 10;
       ball.x = player2.x;
    } else if(keyPress.ArrowLeft){
       ball.x = player2.x - 10;
       ball.y = player2.y;
    } else if(keyPress.ArrowRight){
       ball.x = player2.x + 10;
       ball.y = player2.y;
    }
}

setTimeout(() => {
    app.ticker.add(() => move());
}, 200);