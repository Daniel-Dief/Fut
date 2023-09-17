const teamOrange = [];
const teamPurple = [];


/*team orange*/
for(let i=0;i<5;i++) {
    teamOrange[i] = PIXI.Sprite.from('./imgs/teamOrange.png');
    teamOrange[i].anchor.set(0.5);
    teamOrange[i].scale.x *= 0.5;
    teamOrange[i].scale.y *= 0.5;
    teamOrange[i].team = 'orange';
    teamOrange[i].keyPress = {};
    teamOrange[i].keyLast = 'Right';

    app.stage.addChild(teamOrange[i]);
}

/*team purple*/
for(let i=0;i<5;i++) {
    teamPurple[i] = PIXI.Sprite.from('./imgs/teamPurple.png');
    teamPurple[i].anchor.set(0.5);
    teamPurple[i].scale.x *= 0.5;
    teamPurple[i].scale.y *= 0.5;
    teamPurple[i].team = 'purple';
    teamPurple[i].keyPress = {};
    teamPurple[i].keyLast = 'Left';

    app.stage.addChild(teamPurple[i]);
}


/*team positions*/
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

/*ball colision*/
app.ticker.add(() => {
    for(let i=0; i<5; i++){
        teamPosse(teamOrange[i], ball);
    }
    for(let i=0; i<5; i++){
        teamPosse(teamPurple[i], ball);
    }
});