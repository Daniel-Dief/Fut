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
    posse(player1, ball);
    posse(player2, ball);
}

app.ticker.add(() => move());