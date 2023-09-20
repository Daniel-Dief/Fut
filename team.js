const teamOrange = [];
const teamPurple = [];


/*team orange*/
for (let i = 0; i <= 5; i++) {
    teamOrange[i] = PIXI.Sprite.from('./imgs/teamOrange.png');
    teamOrange[i].anchor.set(0.5);
    teamOrange[i].scale.x *= 0.5;
    teamOrange[i].scale.y *= 0.5;
    teamOrange[i].team = 'orange';
    teamOrange[i].direction = 'Right';
    teamOrange[i].posse = true;

    app.stage.addChild(teamOrange[i]);
}

/*team purple*/
for (let i = 0; i <= 5; i++) {
    teamPurple[i] = PIXI.Sprite.from('./imgs/teamPurple.png');
    teamPurple[i].anchor.set(0.5);
    teamPurple[i].scale.x *= 0.5;
    teamPurple[i].scale.y *= 0.5;
    teamPurple[i].team = 'purple';
    teamPurple[i].direction = 'Left';
    teamPurple[i].posse = true;

    app.stage.addChild(teamPurple[i]);
}


/*team positions*/
teamOrange[0].position.set(300, 200);
teamOrange[1].position.set(300, 400);
teamOrange[2].position.set(450, 150);
teamOrange[3].position.set(450, 300);
teamOrange[4].position.set(450, 450);
teamOrange[5].position.set(90, 300);

teamPurple[0].position.set(900, 200);
teamPurple[1].position.set(900, 400);
teamPurple[2].position.set(750, 150);
teamPurple[3].position.set(750, 300);
teamPurple[4].position.set(750, 450);
teamPurple[5].position.set(1110, 300);

/*ball colision*/
app.ticker.add(() => {
    for (let i = 0; i <= 5; i++) {
        teamPosse(teamOrange[i], ball);
    }
    for (let i = 0; i <= 5; i++) {
        teamPosse(teamPurple[i], ball);
    }
});

/*move teams*/

function moveTeam() {
    if (!pause) {
        /*golero Laranja*/
        if (!teamOrange[5].posse) {
            if (teamOrange[5].x < ball.x && teamOrange[5].x < 200) {
                teamOrange[5].x += 2;
            }
            if (teamOrange[5].x > ball.x && teamOrange[5].x > 70) {
                teamOrange[5].x -= 2;
            }
            if (teamOrange[5].y < ball.y && teamOrange[5].y < 400) {
                teamOrange[5].y += 2;
            }
            if (teamOrange[5].y > ball.y && teamOrange[5].y > 200) {
                teamOrange[5].y -= 2;
            }
        } else {
            if (teamOrange[5].x < 200) {
                teamOrange[5].x += 2;
            } else {
                rolar(teamOrange[5].direction);
            }
            if (player2.y > teamOrange[5].y && player2.y < teamOrange[5].y + 50 && teamOrange[5].y > 200) {
                teamOrange[5].y -= 2;
            }
            if (player2.y < teamOrange[5].y && player2.y > teamOrange[5].y - 50 && teamOrange[5].y < 400) {
                teamOrange[5].y += 2;
            }
        }

        /*golero Roxo*/
        if (!teamPurple[5].posse) {
            if (teamPurple[5].x > ball.x && teamPurple[5].x > 1000) {
                teamPurple[5].x -= 2;
            }
            if (teamPurple[5].x < ball.x && teamPurple[5].x < 1130) {
                teamPurple[5].x += 2;
            }
            if (teamPurple[5].y < ball.y && teamPurple[5].y < 400) {
                teamPurple[5].y += 2;
            }
            if (teamPurple[5].y > ball.y && teamPurple[5].y > 200) {
                teamPurple[5].y -= 2;
            }
        } else {
            if (teamPurple[5].x > 1000) {
                teamPurple[5].x -= 2;
            } else {
                rolar(teamPurple[5].direction);
            }
            if (player1.y > teamPurple[5].y && player1.y < teamPurple[5].y + 50 && teamPurple[5].y > 1000) {
                teamPurple[5].y += 2;
            }
            if (player1.y < teamPurple[5].y && player1.y > teamPurple[5].y - 50 && teamPurple[5].y < 800) {
                teamPurple[5].y -= 2;
            }
        }


        /*Zagueiro Laranja [0]*/
        if (!teamOrange[0].posse) {
            if (teamOrange[0].x < ball.x && teamOrange[0].x < 550) {
                teamOrange[0].x += 2;
            }
            if (teamOrange[0].x > ball.x && teamOrange[0].x > 80) {
                teamOrange[0].x -= 2;
            }
            if (teamOrange[0].y > ball.y && teamOrange[0].y > 70) {
                teamOrange[0].y -= 2;
            }
            if (teamOrange[0].y < ball.y && teamOrange[0].y < 275) {
                teamOrange[0].y += 2;
            }
        } else {
            if (teamOrange[0].x < 550) {
                teamOrange[0].x += 2;
            } else {
                rolar(teamOrange[0].direction);
            }
            for(let i=0; i<=5; i++){
                if(teamPurple[i].x > teamOrange[0].x - 100 && teamPurple[i].x < teamOrange[0].x + 100){
                    if(teamPurple[i].y > teamOrange[0].y - 50 && teamPurple[i].y < teamOrange[0].y){
                        teamOrange[i].y += 2;
                    } else if(teamPurple[i].y < teamOrange[0].y + 50 && teamPurple[i].y > teamOrange[0].y){
                        teamOrange[i].y -= 2;
                    }
                    if(teamPurple[i].y == teamOrange[0].y){
                        teamOrange[0].y -= 2;
                    }
                }
            }
            if (player2.y > teamOrange[0].y && player2.y < teamOrange[0].y + 50 && teamOrange[0].y > 80) {
                teamOrange[0].y -= 2;
            }
            if (player2.y < teamOrange[0].y && player2.y > teamOrange[0].y - 50 && teamOrange[0].y < 275) {
                teamOrange[0].y += 2;
            }
        }

        /*Zagueiro Laranja [1]*/
        if (!teamOrange[1].posse) {
            if (teamOrange[1].x < ball.x && teamOrange[1].x < 550) {
                teamOrange[1].x += 2;
            }
            if (teamOrange[1].x > ball.x && teamOrange[1].x > 80) {
                teamOrange[1].x -= 2;
            }
            if (teamOrange[1].y > ball.y && teamOrange[1].y > 325) {
                teamOrange[1].y -= 2;
            }
            if (teamOrange[1].y < ball.y && teamOrange[1].y < 530) {
                teamOrange[1].y += 2;
            }
        } else {
            if (teamOrange[1].x < 550) {
                teamOrange[1].x += 2;
            } else {
                rolar(teamOrange[1].direction);
            }
            for(let i=0; i<=5; i++){
                if(teamPurple[i].x > teamOrange[1].x - 100 && teamPurple[i].x < teamOrange[1].x + 100){
                    if(teamPurple[i].y > teamOrange[1].y - 50 && teamPurple[i].y < teamOrange[1].y){
                        teamOrange[i].y += 2;
                    } else if(teamPurple[i].y < teamOrange[1].y + 50 && teamPurple[i].y > teamOrange[1].y){
                        teamOrange[i].y -= 2;
                    }
                    if(teamPurple[i].y == teamOrange[1].y){
                        teamOrange[1].y -= 2;
                    }
                }
            }
            if (player2.y > teamOrange[1].y && player2.y < teamOrange[1].y + 50 && teamOrange[1].y > 325) {
                teamOrange[1].y -= 2;
            }
            if (player2.y < teamOrange[1].y && player2.y > teamOrange[1].y - 50 && teamOrange[1].y < 530) {
                teamOrange[1].y += 2;
            }
        }

        /*Zagueiro Roxo [0]*/
        if (!teamPurple[0].posse) {
            if (teamPurple[0].x < ball.x && teamPurple[0].x < 1120) {
                teamPurple[0].x += 2;
            }
            if (teamPurple[0].x > ball.x && teamPurple[0].x > 650) {
                teamPurple[0].x -= 2;
            }
            if (teamPurple[0].y > ball.y && teamPurple[0].y > 70) {
                teamPurple[0].y -= 2;
            }
            if (teamPurple[0].y < ball.y && teamPurple[0].y < 275) {
                teamPurple[0].y += 2;
            }
        } else {
            if (teamPurple[0].x > 650) {
                teamPurple[0].x -= 2;
            } else {
                rolar(teamPurple[0].direction);
            }
            for(let i=0; i<=5; i++){
                if(teamOrange[i].x > teamPurple[0].x - 100 && teamOrange[i].x < teamPurple[0].x + 100){
                    if(teamOrange[i].y > teamPurple[0].y - 50 && teamOrange[i].y < teamPurple[0].y){
                        teamPurple[i].y += 2;
                    } else if(teamOrange[i].y < teamPurple[0].y + 50 && teamOrange[i].y > teamPurple[0].y){
                        teamPurple[i].y -= 2;
                    }
                    if(teamOrange[i].y == teamPurple[0].y){
                        teamPurple[0].y -= 2;
                    }
                }
            }
            if (player1.y > teamPurple[0].y && player1.y < teamPurple[0].y + 50 && teamPurple[0].y > 80) {
                teamPurple[0].y -= 2;
            }
            if (player1.y < teamPurple[0].y && player1.y > teamPurple[0].y - 50 && teamPurple[0].y < 275) {
                teamPurple[0].y += 2;
            }
        }

        /*Zagueiro Roxo [1]*/
        if (!teamPurple[1].posse) {
            if (teamPurple[1].x < ball.x && teamPurple[1].x < 1120) {
                teamPurple[1].x += 2;
            }
            if (teamPurple[1].x > ball.x && teamPurple[1].x > 650) {
                teamPurple[1].x -= 2;
            }
            if (teamPurple[1].y > ball.y && teamPurple[1].y > 325) {
                teamPurple[1].y -= 2;
            }
            if (teamPurple[1].y < ball.y && teamPurple[1].y < 530) {
                teamPurple[1].y += 2;
            }
        } else {
            if (teamPurple[1].x > 650) {
                teamPurple[1].x -= 2;
            } else {
                rolar(teamPurple[1].direction);
            }
            for(let i=0; i<=5; i++){
                if(teamOrange[i].x > teamPurple[1].x - 100 && teamOrange[i].x < teamPurple[1].x + 100){
                    if(teamOrange[i].y > teamPurple[1].y - 50 && teamOrange[i].y < teamPurple[1].y){
                        teamPurple[i].y += 2;
                    } else if(teamOrange[i].y < teamPurple[1].y + 50 && teamOrange[i].y > teamPurple[1].y){
                        teamPurple[i].y -= 2;
                    }
                    if(teamOrange[i].y == teamPurple[1].y){
                        teamPurple[1].y -= 2;
                    }
                }
            }
            if (player1.y > teamPurple[1].y && player1.y < teamPurple[1].y + 50 && teamPurple[1].y > 325) {
                teamPurple[1].y -= 2;
            }
            if (player1.y < teamPurple[1].y && player1.y > teamPurple[1].y - 50 && teamPurple[1].y < 530) {
                teamPurple[1].y += 2;
            }
        }

        /*Lateral Laranja [2]*/
        if (!teamOrange[2].posse) {
            if (teamOrange[2].x < ball.x && teamOrange[2].x < 900) {
                teamOrange[2].x += 2;
            }
            if (teamOrange[2].x > ball.x && teamOrange[2].x > 400) {
                teamOrange[2].x -= 2;
            }
            if (teamOrange[2].y > ball.y && teamOrange[2].y > 70) {
                teamOrange[2].y -= 2;
            }
            if (teamOrange[2].y < ball.y && teamOrange[2].y < 200) {
                teamOrange[2].y += 2;
            }
        } else {
            if (teamOrange[2].x < 900) {
                teamOrange[2].x += 2;
            } else {
                rolar(teamOrange[2].direction);
            }
            for(let i=0; i<=5; i++){
                if(teamPurple[i].x > teamOrange[2].x - 100 && teamPurple[i].x < teamOrange[2].x + 100){
                    if(teamPurple[i].y > teamOrange[2].y - 50 && teamPurple[i].y < teamOrange[2].y){
                        teamOrange[i].y += 2;
                    } else if(teamPurple[i].y < teamOrange[2].y + 50 && teamPurple[i].y > teamOrange[2].y){
                        teamOrange[i].y -= 2;
                    }
                    if(teamPurple[i].y == teamOrange[2].y){
                        teamOrange[2].y -= 2;
                    }
                }
            }
            if (player2.y > teamOrange[2].y && player2.y < teamOrange[2].y + 50 && teamOrange[2].y > 70) {
                teamOrange[2].y -= 2;
            }
            if (player2.y < teamOrange[2].y && player2.y > teamOrange[2].y - 50 && teamOrange[2].y < 200) {
                teamOrange[2].y += 2;
            }
        }

        /*Meio Laranja [3]*/
        if (!teamOrange[3].posse) {
            if (teamOrange[3].x < ball.x && teamOrange[3].x < 750) {
                teamOrange[3].x += 2;
            }
            if (teamOrange[3].x > ball.x && teamOrange[3].x > 400) {
                teamOrange[3].x -= 2;
            }
            if (teamOrange[3].y > ball.y && teamOrange[3].y > 200) {
                teamOrange[3].y -= 2;
            }
            if (teamOrange[3].y < ball.y && teamOrange[3].y < 400) {
                teamOrange[3].y += 2;
            }
        } else {
            if (teamOrange[3].x < 750) {
                teamOrange[3].x += 2;
            } else {
                rolar(teamOrange[3].direction);
            }
            for(let i=0; i<=5; i++){
                if(teamPurple[i].x > teamOrange[3].x - 100 && teamPurple[i].x < teamOrange[3].x + 100){
                    if(teamPurple[i].y > teamOrange[3].y - 50 && teamPurple[i].y < teamOrange[3].y){
                        teamOrange[i].y += 2;
                    } else if(teamPurple[i].y < teamOrange[3].y + 50 && teamPurple[i].y > teamOrange[3].y){
                        teamOrange[i].y -= 2;
                    }
                    if(teamPurple[i].y == teamOrange[3].y){
                        teamOrange[3].y -= 2;
                    }
                }
            }
            if (player2.y > teamOrange[3].y && player2.y < teamOrange[3].y + 50 && teamOrange[3].y > 200) {
                teamOrange[3].y -= 2;
            }
            if (player2.y < teamOrange[3].y && player2.y > teamOrange[3].y - 50 && teamOrange[3].y < 400) {
                teamOrange[3].y += 2;
            }
        }

        /*Lateral Laranja [4]*/
        if (!teamOrange[4].posse) {
            if (teamOrange[4].x < ball.x && teamOrange[4].x < 900) {
                teamOrange[4].x += 2;
            }
            if (teamOrange[4].x > ball.x && teamOrange[4].x > 400) {
                teamOrange[4].x -= 2;
            }
            if (teamOrange[4].y > ball.y && teamOrange[4].y > 400) {
                teamOrange[4].y -= 2;
            }
            if (teamOrange[4].y < ball.y && teamOrange[4].y < 530) {
                teamOrange[4].y += 2;
            }
        } else {
            if (teamOrange[4].x < 900) {
                teamOrange[4].x += 2;
            } else {
                rolar(teamOrange[4].direction);
            }
            for(let i=0; i<=5; i++){
                if(teamPurple[i].x > teamOrange[4].x - 100 && teamPurple[i].x < teamOrange[4].x + 100){
                    if(teamPurple[i].y > teamOrange[4].y - 50 && teamPurple[i].y < teamOrange[4].y){
                        teamOrange[i].y += 2;
                    } else if(teamPurple[i].y < teamOrange[4].y + 50 && teamPurple[i].y > teamOrange[4].y){
                        teamOrange[i].y -= 2;
                    }
                    if(teamPurple[i].y == teamOrange[4].y){
                        teamOrange[4].y -= 2;
                    }
                }
            }
            if (player2.y > teamOrange[4].y && player2.y < teamOrange[4].y + 50 && teamOrange[4].y > 400) {
                teamOrange[4].y -= 2;
            }
            if (player2.y < teamOrange[4].y && player2.y > teamOrange[4].y - 50 && teamOrange[4].y < 530) {
                teamOrange[4].y += 2;
            }
        }

        /*Lateral Roxo [2]*/
        if (!teamPurple[2].posse) {
            if (teamPurple[2].x > ball.x && teamPurple[2].x > 300) {
                teamPurple[2].x -= 2;
            }
            if (teamPurple[2].x < ball.x && teamPurple[2].x < 800) {
                teamPurple[2].x += 2;
            }
            if (teamPurple[2].y > ball.y && teamPurple[2].y > 70) {
                teamPurple[2].y -= 2;
            }
            if (teamPurple[2].y < ball.y && teamPurple[2].y < 200) {
                teamPurple[2].y += 2;
            }
        } else {
            if (teamPurple[2].x < 300) {
                teamPurple[2].x += 2;
            } else {
                rolar(teamPurple[2].direction);
            }
            for(let i=0; i<=5; i++){
                if(teamOrange[i].x > teamPurple[2].x - 100 && teamOrange[i].x < teamPurple[2].x + 100){
                    if(teamOrange[i].y > teamPurple[2].y - 50 && teamOrange[i].y < teamPurple[2].y){
                        teamPurple[i].y += 2;
                    } else if(teamOrange[i].y < teamPurple[2].y + 50 && teamOrange[i].y > teamPurple[2].y){
                        teamPurple[i].y -= 2;
                    }
                    if(teamOrange[i].y == teamPurple[2].y){
                        teamPurple[2].y -= 2;
                    }
                }
            }
            if (player2.y > teamPurple[2].y && player2.y < teamPurple[2].y + 50 && teamPurple[2].y > 70) {
                teamPurple[2].y -= 2;
            }
            if (player2.y < teamPurple[2].y && player2.y > teamPurple[2].y - 50 && teamPurple[2].y < 200) {
                teamPurple[2].y += 2;
            }
        }

        /*Lateral Roxo [3]*/
        if (!teamPurple[3].posse) {
            if (teamPurple[3].x > ball.x && teamPurple[3].x > 450) {
                teamPurple[3].x -= 2;
            }
            if (teamPurple[3].x < ball.x && teamPurple[3].x < 800) {
                teamPurple[3].x += 2;
            }
            if (teamPurple[3].y > ball.y && teamPurple[3].y > 200) {
                teamPurple[3].y -= 2;
            }
            if (teamPurple[3].y < ball.y && teamPurple[3].y < 400) {
                teamPurple[3].y += 2;
            }
        } else {
            if (teamPurple[3].x < 450) {
                teamPurple[3].x += 2;
            } else {
                rolar(teamPurple[3].direction);
            }
            for(let i=0; i<=5; i++){
                if(teamOrange[i].x > teamPurple[3].x - 100 && teamOrange[i].x < teamPurple[3].x + 100){
                    if(teamOrange[i].y > teamPurple[3].y - 50 && teamOrange[i].y < teamPurple[3].y){
                        teamPurple[i].y += 2;
                    } else if(teamOrange[i].y < teamPurple[3].y + 50 && teamOrange[i].y > teamPurple[3].y){
                        teamPurple[i].y -= 2;
                    }
                    if(teamOrange[i].y == teamPurple[3].y){
                        teamPurple[3].y -= 2;
                    }
                }
            }
            if (player2.y > teamPurple[3].y && player2.y < teamPurple[3].y + 50 && teamPurple[3].y > 200) {
                teamPurple[3].y -= 2;
            }
            if (player2.y < teamPurple[3].y && player2.y > teamPurple[3].y - 50 && teamPurple[3].y < 400) {
                teamPurple[3].y += 2;
            }
        }

        /*Lateral Roxo [4]*/
        if (!teamPurple[4].posse) {
            if (teamPurple[4].x > ball.x && teamPurple[4].x > 300) {
                teamPurple[4].x -= 2;
            }
            if (teamPurple[4].x < ball.x && teamPurple[4].x < 800) {
                teamPurple[4].x += 2;
            }
            if (teamPurple[4].y > ball.y && teamPurple[4].y > 400) {
                teamPurple[4].y -= 2;
            }
            if (teamPurple[4].y < ball.y && teamPurple[4].y < 530) {
                teamPurple[4].y += 2;
            }
        } else {
            if (teamPurple[4].x < 300) {
                teamPurple[4].x += 2;
            } else {
                rolar(teamPurple[4].direction);
            }
            for(let i=0; i<=5; i++){
                if(teamOrange[i].x > teamPurple[4].x - 100 && teamOrange[i].x < teamPurple[4].x + 100){
                    if(teamOrange[i].y > teamPurple[4].y - 50 && teamOrange[i].y < teamPurple[4].y){
                        teamPurple[i].y += 2;
                    } else if(teamOrange[i].y < teamPurple[4].y + 50 && teamOrange[i].y > teamPurple[4].y){
                        teamPurple[i].y -= 2;
                    }
                    if(teamOrange[i].y == teamPurple[4].y){
                        teamPurple[4].y -= 2;
                    }
                }
            }
            if (player2.y > teamPurple[4].y && player2.y < teamPurple[4].y + 50 && teamPurple[4].y > 400) {
                teamPurple[4].y -= 2;
            }
            if (player2.y < teamPurple[4].y && player2.y > teamPurple[4].y - 50 && teamPurple[4].y < 530) {
                teamPurple[4].y += 2;
            }
        }
    }
}