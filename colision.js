function posse(jogador, bola){
    let jInix, jBordax, bInix, bBordax, jIniy, jBorday, bIniy, bBorday;
    jInix = jogador.x;
    jBordax = jogador.x + jogador.width;
    bInix = bola.x;
    bBordax = bola.x + bola.width;
    jIniy = jogador.y;
    jBorday = jogador.y + jogador.height;
    bIniy = bola.y;
    bBorday = bola.y + bola.height;

    if((bInix >= jInix && bInix <= jBordax) || (bBordax >= jInix && bBordax <= jBordax)) {
        if((bIniy >= jIniy && bIniy <= jBorday) || (bBorday >= jIniy && bBorday <= jBorday)) {
            return true;
        }
    }

    return false;
}

function pontoP1(bola){
    let bBordax, bIniy, bBorday;
    bBordax = bola.x + bola.width;
    bIniy = bola.y;
    bBorday = bola.y + bola.height;

    if(bBordax >= 1135 && bIniy >= 255 && bBorday <= 360){
        console.log('ponto p1');
    }
}

function pontoP2(bola){
    let bInix, bIniy, bBorday;
    bInix = bola.x;
    bIniy = bola.y;
    bBorday = bola.y + bola.height;

    if(bInix <= 70 && bIniy >= 260 && bBorday <= 360){
        console.log('ponto p1');
    }
}