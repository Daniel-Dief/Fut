keyPress = {};

window.addEventListener("keydown", (key) => {
    keyPress[key.key] = true;
})

window.addEventListener("keyup", (key) => {
    keyPress[key.key] = false;
})

function move(){
    if(keyPress.w){
        player1.y += -5;
    }
    if(keyPress.s){
        player1.y += 5;
    }
    if(keyPress.a){
        player1.x += -5;
    }
    if(keyPress.d){
        player1.x += 5;
    }
    if(keyPress.ArrowUp){
        player2.y += -5;
    }
    if(keyPress.ArrowDown){
        player2.y += 5;
    }
    if(keyPress.ArrowLeft){
        player2.x += -5;
    }
    if(keyPress.ArrowRight){
        player2.x += 5;
    }
}

app.ticker.add(() => move());